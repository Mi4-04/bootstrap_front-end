import React from 'react';
import styled from 'styled-components';
import { spacing } from '../../theme';
import { TextDefault } from '../text';

export const LoaderComponent = (props) => {
  const { titleTid } = props;

  return (
    <div>
      <Loading tid={titleTid} />
    </div>
  );
};

const Loading = styled(TextDefault)`
  margin-bottom: ${spacing(1)};
`;
