import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home/Home';
import Users from '../components/Users/Users';
import Posts from '../components/Posts/Posts';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  );
};

export default AppRoutes;
