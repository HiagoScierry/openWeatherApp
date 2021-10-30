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

export const Text = styled.Text`
    font-size: 20px;
    color: ${colors.text.main};
`