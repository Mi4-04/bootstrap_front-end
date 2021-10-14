import styled from 'styled-components';
import { TextButton } from '../text';
import { spacing } from '../../theme';

export function ButtonField(props) {
  const { titleTid } = props;

  return <Button tid={titleTid} />;
}

const Button = styled(TextButton)`
  margin-bottom: ${spacing(1)};
`;
