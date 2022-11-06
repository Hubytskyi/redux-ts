import React from 'react';
import { User } from '../../../interfaces/user.interface';

const UserItem = ({id, name, email}: User) => {
  return (
    <div>
      {id} <strong>{name}, </strong>{email}
    </div>
  );
};

export default UserItem;