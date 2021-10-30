import React from 'react';
import { Container, Text } from './styles';

// import { Container } from './styles';

interface IButton {
  text: string;
  action: () => void;
}

const Button: React.FC<IButton> = ({  text, action }) => {
  return (
    <Container onPress={action}>
      <Text>{text}</Text>
    </Container>
  );
};

export default Button;
