import { StyledButton } from './Button.styles';


function Button({ children, onMouseDown, icon }) {
  const handleOnMouseDown = (event) => {
    event.preventDefault();
    onMouseDown && onMouseDown(event);
  };

  return (
    <StyledButton onMouseDown={handleOnMouseDown}>
      <span>{icon}</span>
      {children}
    </StyledButton>
  );
}

export { Button };
