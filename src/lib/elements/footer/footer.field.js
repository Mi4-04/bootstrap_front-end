import React from 'react';
import styled from 'styled-components';
import { spacing } from '../../theme';
import { TextDefault, TextLink } from '../text';

export function FooterField(props) {
  const { titleTid, linkTid, onClick } = props;

  return (
    <div>
      <Title tid={titleTid} />

      <Span tid={linkTid} onClick={onClick} />
    </div>
  );
}

const Title = styled(TextDefault)`
  margin-bottom: ${spacing(1)};
`;

const Span = styled(TextLink)`
  margin-bottom: ${spacing(1)};
`;
