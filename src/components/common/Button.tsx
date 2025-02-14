import { colors } from '@/styles';
import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  color?: string;
  size?: 'small' | 'medium' | 'large';
  active?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  color = 'black',
  size = 'medium',
  active = 'false',
  children,
  onClick,
}: ButtonProps) => {
  return (
    <S.Button color={color} size={size} active={active} onClick={onClick}>
      {children}
    </S.Button>
  );
};

const S = {
  Button: styled.button<ButtonProps>`
    width: ${(props) => {
      switch (props.size) {
        case 'small':
          return '10%';
        case 'medium':
          return '15%';
        case 'large':
          return '20%';
        default:
          return '15%';
      }
    }};
    height: ${(props) => {
      switch (props.size) {
        case 'small':
          return '3vh';
        case 'medium':
          return '4vh';
        case 'large':
          return '5vh';
        default:
          return '4vh';
      }
    }};

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 1.2rem;
    border-radius: 4px;
    padding: 4px;
    background-color: ${(props) =>
      props.active === 'true' ? colors.semantic.secondary : ''};
    color: ${(props) =>
      props.active === 'true'
        ? colors.semantic.text.light
        : colors.semantic.text.dark};
    &:hover {
      color: ${colors.semantic.text.light};
    }

    p {
      cursor: pointer;
    }
  `,
};

export default Button;
