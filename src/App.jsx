import React from 'react';
import { ThemeProvider } from '@mui/material';
import Layout from './components/Layouts/Layout';
import AppRoutes from './routes/AppRoutes';
import './App.css';
import theme from './styles/theme/theme.const';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <AppRoutes />
        <div>test</div>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
