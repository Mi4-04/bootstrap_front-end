import React, { useState, useEffect } from 'react';
import { HomeTitleComponent } from './frame/home-title';
import axios from 'axios';
import { FieldSecondary } from '../../lib/elements/field/';

/*export async function getStaticProps(props) {
  const res = await fetch('http://localhost:4000/auth/home');
  const users = await res.json();

  console.log(res);
  console.log(users);
  return {
    props: { users },
  };
}*/
export function HomeComponent(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/auth/home')
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, []);

  return (
    <div>
      <HomeTitleComponent />
      {users.map((user) => (
        <div key={user.id}>
          <div>
            <FieldSecondary
              titleTid="USER.USER_FIELD.ID.TITLE"
              userId={user.id}
            />
          </div>
          <h3>{user.login}</h3>

          <hr />
        </div>
      ))}
    </div>
  );
}
