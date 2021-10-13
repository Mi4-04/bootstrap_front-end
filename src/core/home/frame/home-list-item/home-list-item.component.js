import React from 'react';
import { FieldSecondary } from '../../../../lib/elements/field';

export function HomeListItemComponent(props) {
  const user = props.user;

  return (
    <div>
      <div>
        <div key={user.id}>
          <FieldSecondary
            titleTid="USER.USER_FIELD.ID.TITLE"
            userId={user.id}
          />
        </div>
        <h3>{user.login}</h3>

        <hr />
      </div>
    </div>
  );
}
