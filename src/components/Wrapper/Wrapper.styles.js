import styled from 'styled-components';
import { devices, spaces } from '../../styles';

const StyledWrapper = styled.div`
  margin: 0 auto;
  padding: 0 ${spaces[3]};
  max-width: 100%;

  @media ${devices.desktop} {
    max-width: 1260px;
  }
`;

export { StyledWrapper };
