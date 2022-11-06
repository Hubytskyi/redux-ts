import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { fetchUsers } from '../../store/action-creators/users';
import UserItem from './User/User';

const Users = () => {
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useAppSelector(state => state.userReducer);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {data.length > 0 && data.map(user => (
        <UserItem {...user} />
      ))}
    </div>
  );
};

export default Users;