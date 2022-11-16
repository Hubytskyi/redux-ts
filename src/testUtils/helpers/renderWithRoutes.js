import { MemoryRouter } from 'react-router-dom';
import AppRoutes from '../../routes/AppRoutes';

export const renderWithRouter = (component, initialRouter = '/') => {
  return (
    <MemoryRouter initialEntries={[initialRouter]}>
      <AppRoutes />
      {component}
    </MemoryRouter>
  )
}