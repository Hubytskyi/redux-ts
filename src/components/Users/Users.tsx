import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { fetchUsers } from '../../store/action-creators/users';
import UserItem from './User/User';
import { Box, CircularProgress, Typography } from '@mui/material';

const Users = () => {
  const dispatch = useAppDispatch();
  const { data: users, error, isLoading } = useAppSelector(state => state.userReducer);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <Box>
      <h1>Users</h1>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
        },
      }}>
        {isLoading && <CircularProgress/>}
        {error && <Typography>Something went wrong...</Typography>}
        {!!users && users.map(user => (
          <UserItem {...user} />
        ))}
      </Box>
    </Box>
  );
};

export default Users;