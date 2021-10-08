import styled from 'styled-components';
import { text } from '../../common/text';
import { THEME_SIZE, THEME_COLOR, THEME_BUTTON } from '../../theme';

export const TextButton = (props) => {
  return <Text>{text(props.tid, props.tvalue)}</Text>;
};

const Text = styled.button`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  color: ${THEME_COLOR.TEXT_DARK};
  background: ${THEME_BUTTON.BACKGROUND};
  border-radius: ${THEME_BUTTON.BORDER_RADIUS};
`;
