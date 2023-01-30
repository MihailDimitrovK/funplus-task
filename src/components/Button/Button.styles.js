import styled from 'styled-components';
import { colors, spaces } from '../../styles';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${spaces[6]};
  font-size: ${spaces[3]};
  text-transform: uppercase;
  padding: ${spaces[1]} ${spaces[3]};
  border-radius: ${spaces[1]};
  border: none;
  cursor: pointer;
  line-height: ${spaces[6]};
  outline: none;
  box-shadow: 7px 6px 28px 1px ${colors.faded.shadow};
  transition: 0.2s all;
  

  span {
    display: flex;
    margin-right: ${spaces[3]};
    font-size: 20px;
    color: ${colors.primary};
    transition: transform 0.3s ease-in-out;
  }

  &:active {
    transform: scale(0.99);
    box-shadow: 3px 2px 22px 1px ${colors.faded.shadow};
  }

  &:hover span {
    transform: rotate(90deg);
  }
`;

export { StyledButton };
