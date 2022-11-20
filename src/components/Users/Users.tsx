import React from 'react';
import UserItem from './User/User';
import { Box, CircularProgress, Typography } from '@mui/material';
import { userAPI } from '../../services/UserService';

const Users = () => {
  const { data: users, error, isLoading } = userAPI.useFetchAllUsersQuery(10);

  return (
    <Box>
      <h1>Users</h1>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
          },
        }}
      >
        {isLoading && <CircularProgress />}
        {error && <Typography>Something went wrong...</Typography>}
        {!!users && users.map((user) => <UserItem {...user} key={user.id}/>)}
      </Box>
    </Box>
  );
};

export default Users;
