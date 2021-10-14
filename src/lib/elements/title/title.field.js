import styled from 'styled-components';
import React from 'react';
import { spacing } from '../../theme';
import { TextDefault } from '../text';

export function TitleField(props) {
  const { titleTid } = props;

  return <Title tid={titleTid} />;
}

const Title = styled(TextDefault)`
  margin-bottom: ${spacing(1)};
`;
