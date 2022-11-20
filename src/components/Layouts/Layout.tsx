import React from 'react';
import Nav from '../Nav/Nav';
import { LayoutProps } from '../../interfaces/layout.interface';
import { Box, Container } from '@mui/material';

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <Nav />
      <Box sx={{ pt: 10 }}>
        <Container maxWidth={'xl'}>{children}</Container>
      </Box>
    </Box>
  );
};

export default Layout;
