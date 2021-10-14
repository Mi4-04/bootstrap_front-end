import React from 'react';
import styled from 'styled-components';
import { spacing } from '../../theme';
import { TextSecondary } from '../text';

export const FieldSecondary = (props) => {
  const { titleTid, userId } = props;

  return (
    <div>
      <FieldId tid={titleTid} tvalue={{ userId }} />
    </div>
  );
};

const FieldId = styled(TextSecondary)`
  margin-bottom: ${spacing(1)};
`;
