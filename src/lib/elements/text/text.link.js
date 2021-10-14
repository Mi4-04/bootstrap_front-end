import styled from 'styled-components';
import { text } from '../../common/text';
import { THEME_SIZE, THEME_COLOR } from '../../theme';

export const TextLink = (props) => {
  return <Text>{text(props.tid, props.tvalue)}</Text>;
};

const Text = styled.span`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT_LINK};
`;
