import React from 'react';
import { User } from './User';

export const UserList = ({users}) => {
  return (
    <section className="users">
      <p className="p-title">Users Online:</p>
      <ul className="ul-section ul-users">
        {users.map(user => 
          <User user={user} />
        )}
      </ul>
    </section>
  );
}

export default UserList;