import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import Users from './components/Users/Users';
import Posts from './components/Posts/Posts';
import Layout from './components/Layouts/Layout';
import Home from './components/Home/Home';
import './App.css';
import theme from './styles/theme/theme.const';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/posts" element={<Posts/>}/>
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
