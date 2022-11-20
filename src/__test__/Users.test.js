import { screen } from '@testing-library/react';
import { renderWithProviders } from '../testUtils/helpers/renderWithProviders';
import Users from '../components/Users/Users';

describe('Users', () => {
	test('count of users', async () => {
		renderWithProviders(<Users />);
		const users = await screen.findAllByTestId('user-item');
		expect(users.length).toBe(2);
	});
});
