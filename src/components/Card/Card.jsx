import React from 'react';
import { StyledCard } from './Card.styles';

function Card({as, children, radius, flex}) {
  return <StyledCard as={as} $radius={radius} $flex={flex}>{children}</StyledCard>;
}

export { Card };
