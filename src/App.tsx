import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Users from './components/Users/Users';
import Layout from './components/Layouts/Layout';
import Home from './components/Home/Home';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/users" element={<Users />}/>
      </Routes>
    </Layout>
  );
};

export default App;