"use client"
import { TypeAnimation } from 'react-type-animation';
import styled from '@emotion/styled';

export const StyledTypeAnimation = styled(TypeAnimation)<{ italic?: boolean; weight?: number }>`
  font-weight: ${(props) => (props.weight ? props.weight : 'bold')};
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
  line-height: 1.2;
  
  @media (max-width: 640px) {
    font-size: clamp(1.2rem, 4vw, 1.8rem);
  }
`;
