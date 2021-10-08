/*import React, { useState } from 'react';
import { httpRequest } from '../../../../main/http';
//import { GetStaticProps } from 'next';
import { HOME_API_URL } from '../../home.constant';

export function HomeFieldContainer({ users }) {
  return (
    <div>
      <ul>
        {users?.map((user) => {
          {
            <li key={user.id}>
              <p>{user.login}</p>
              <hr />
            </li>;
          }
        })}
      </ul>
    </div>
  );
}

export async function getStaticProps(data) {
  const res = await httpRequest({
    method: HOME_API_URL.HOME_FORM_UPLOAD.METHOD,
    url: HOME_API_URL.HOME_FORM_UPLOAD.ENDPOINT,
    data,
  });

  const users = await res.json();
  console.log(res);
  return {
    props: { users },
  };
}
*/
