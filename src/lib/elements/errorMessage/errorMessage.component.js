import React from 'react';
import styled from 'styled-components';
import { spacing } from '../../theme';
import { TextDefault } from '../text';

export const ErrorMessageComponent = (props) => {
  const { errorMessage } = props;

  return (
    <div>
      <Error tvalue={{ errorMessage }} />
    </div>
  );
};

const Error = styled(TextDefault)`
  margin-bottom: ${spacing(1)};
`;
