"use client"
import { TypeAnimation } from 'react-type-animation';
import styled from '@emotion/styled';

export const StyledTypeAnimation = styled(TypeAnimation) <{ italic?: boolean; weight?: number }>`
  font-weight: ${(props) => (props.weight ? props.weight : 'bold')};
  font-size: 40px;
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};

  @media (max-width: 1200px) {
    font-size: 23px;
  }
`;
