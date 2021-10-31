import { colors } from '../../Styles';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  border-radius: 40px;

  justify-content: center;
  align-items: center;

  background-color: ${colors.button.main};
`;

interface PropColorTheme {
    color: string;
}

export const Text = styled.Text<PropColorTheme>`
    font-size: 20px;
    color: ${prop => prop.color ? prop.color : colors.text.main };
`