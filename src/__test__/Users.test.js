import { screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../testUtils/helpers/renderWithProviders';
import Users from '../components/Users/Users';
import { rest } from 'msw';
import { server } from '../mocks/api/server';

describe('Users', () => {
  test('count of users', async () => {
    renderWithProviders(<Users />);
    const users = await screen.findAllByTestId('user-item');
    expect(users.length).toBe(2);
  });

  test('user content', async () => {
    renderWithProviders(<Users />);
    await waitFor(() => screen.findAllByTestId('user-item'));
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('Ervin Howell')).toBeInTheDocument();
  });

  test('if users empty', async () => {
    server.use(
      rest.get('http://localhost:5000/users', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json([]), ctx.delay(30));
      })
    );
    renderWithProviders(<Users />);

    const userName = await screen.queryByText('Leanne Graham');
    expect(userName).toBeNull();
  });
});
