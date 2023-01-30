import styled, { keyframes } from 'styled-components';
import { colors, fonts, spaces, devices } from '../../../../../styles';

const fadeIn = keyframes`
 from { transform: scale(0.2); opacity: 0 }
 to{ transform: scale(1); opacity: 1  }
`;

const StyledStat = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.white};
  opacity: 0;
  text-transform: uppercase;
  animation: ${fadeIn} 1s ease-in-out 0.6s 1 forwards;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: ${spaces[3]};

    div:first-child {
      font-size: ${fonts.fontSize[8]};
      font-weight: ${fonts.fontWeight[3]};
    }
  }

  img {
    display: block;
    height: ${spaces[8]};
  }

  @media ${devices.desktop} {
    & > div {
      div:first-child {
        font-size: ${fonts.fontSize[10]};
      }
    }

    img {
      display: block;
      height: ${spaces[9]};
    }
  }
`;

export { StyledStat };
