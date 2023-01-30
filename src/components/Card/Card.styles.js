import styled from 'styled-components';
import { spaces } from '../../styles';

const StyledCard = styled.div`
  width: 100%;
  border-radius: ${(props) => (props.$radius ? spaces[5] : ``)};
  overflow: hidden;
  display: ${(props) => props.$flex? 'flex': ''};
`;

export { StyledCard };
