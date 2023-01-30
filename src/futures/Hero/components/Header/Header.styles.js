import styled, { keyframes } from 'styled-components';
import { devices, colors, spaces, fonts } from '../../../../styles';
import img from '../../assets/hero-bg.png';

const fadeIn = keyframes`
 from { transform: scale(0.2); opacity: 0 }
 to{ transform: scale(1); opacity: 1  }
`;

const bg = keyframes`
 from {   }
 to{ transform:translateX(100%) }
`;

const StyledHeader = styled.div`
  position: relative;
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: ${colors.primary};
    animation: ${bg} 0.5s ease-in-out 0.1s 1 forwards;
    z-index: 9999;
  }

  padding: ${spaces[3]} ${spaces[5]} 0;
  width: 100%;
  color: ${colors.white};
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${colors.faded.primary};
  & > div:first-child {
    padding-bottom: ${spaces[7]};
    h1 {
      text-transform: uppercase;
      white-space: nowrap;
      span {
        display: block;
        font-size: ${fonts.fontSize[7]};
      }

      span:nth-child(2) {
        font-size: ${fonts.fontSize[8]};
      }
    }

    p {
      font-weight: ${fonts.fontWeight[2]};
      font-size: ${fonts.fontSize[3]};
      line-height: ${fonts.lineHeights[6]};
      max-width: ${spaces[12]};
    }
  }

  div:nth-child(2) {
    img {
      padding: 0 ${spaces[5]} 0;
      max-width: ${spaces[13]};
      width: 100%;
      margin: 0 auto;
      animation: ${fadeIn} normal 0.6s ease-out 0.5s 1 forwards;
      opacity: 0 
    }
  }

  @media ${devices.desktop} {
    display: flex;
    justify-content: center;
    gap: ${spaces[6]};
    padding: ${spaces[5]} 0 0 0;

    & > div:first-child {
      padding-bottom: 0;
      margin-top: ${spaces[5]};
      flex-basis: 40%;

      h1 {
        line-height: ${fonts.lineHeights[9]};
        span {
          font-size: ${fonts.fontSize[9]};
        }

        span:nth-child(2) {
          font-size: ${fonts.fontSize[11]};
        }
      }
      p {
        margin: ${spaces[4]} 0;
      }
    }

    & div:nth-child(2) {
      flex-basis: 45%;
      flex-shrink: 0;
      img {
        min-width: 100%;
        width: 100%;
        margin: 0 auto;
      }
    }
  }
`;

export { StyledHeader };
