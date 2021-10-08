import styled from 'styled-components';
import { text } from '../../common/text';
import { THEME_SIZE, THEME_COLOR } from '../../theme';

export const TextDefault = (props) => {
  return <Text>{text(props.tid, props.tvalue)}</Text>;
};

const Text = styled.span`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  color: ${THEME_COLOR.TEXT_DARK};
`;
