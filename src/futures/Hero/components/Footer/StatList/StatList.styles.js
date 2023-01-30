import styled from 'styled-components';
import { spaces, devices } from '../../../../../styles';

const StyledStatList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: ${spaces[5]};
  div {
    width: 100%;
  }

  @media ${devices.desktop} {
    flex-direction: row;
    padding: ${spaces[4]} 0;
    div {
      width: initial;
    }
  }
`;

export { StyledStatList };
