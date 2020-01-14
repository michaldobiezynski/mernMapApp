import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Michal Dobiezynski',
      image:
        'https://images.pexels.com/photos/3494806/pexels-photo-3494806.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
