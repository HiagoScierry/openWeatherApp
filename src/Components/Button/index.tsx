import React from 'react';
import { Container, Text } from './styles';
interface IButton {
  text: string;
  action: () => void;
  color: string
}

const Button: React.FC<IButton> = ({ text, action, color }) => {
  return (
    <Container onPress={action}>
      <Text color={color}>{text}</Text>
    </Container>
  );
};

export default Button;
