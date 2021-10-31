import { colors, gradients } from '../../Styles';
import { Entypo, Feather } from '../../Utils';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

interface PropsContainer {
  background: string[];
}

interface PropColorTheme {
  color: string;
}

export const Container = styled(LinearGradient).attrs(
  (props: PropsContainer) => ({
    colors: props.background,
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
  }),
)`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

export const WrapperLocation = styled.View`
  width: 80%;

  margin-top: 30px;
  margin-bottom: 50px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const LocationIcon = styled(Entypo).attrs((props: PropColorTheme) => ({
  name: 'location-pin',
  size: 32,
  color:
    props.color !== gradients.night[0]
      ? colors.text.dark
      : colors.text.contrast,
}))``;

export const Location = styled.Text<PropColorTheme>`
  color: ${(props) =>
    props.color !== gradients.night[0]
      ? colors.text.dark
      : colors.text.contrast};
  font-size: 20px;
  font-weight: bold;
`;

interface PropsWeather {
  image: () => string;
}

export const CurrentWeather = styled.Image.attrs((props: PropsWeather) => ({
  source: props.image,
}))`
  width: 50%;
  height: 25%;
  margin-bottom: 40px;
`;
export const WrapperCurrentWeatherInfo = styled.View`
  justify-content: center;
  align-items: center;
`;

export const CurrentWeatherInfo = styled.Text<PropColorTheme>`
  color: ${(props) =>
    props.color !== gradients.night[0]
      ? colors.text.dark
      : colors.text.contrast};
  font-size: 48px;
`;

export const CurrentWeatherInfoDescription = styled.Text<PropColorTheme>`
  color: ${(props) =>
    props.color !== gradients.night[0]
      ? colors.text.dark
      : colors.text.contrast};
  font-size: 20px;
`;

export const WrapperOtherInfos = styled.View`
  width: 90%;

  margin-top: 50px;
  margin-bottom: 100px;

  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const WrapperInfo = styled.View`
  justify-content: center;
  align-items: center;
`;

export const InfoText = styled.Text<PropColorTheme>`
  color: ${(props) =>
    props.color !== gradients.night[0]
      ? colors.text.dark
      : colors.text.contrast};
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;

export const WindIcon = styled(Feather).attrs((prop: PropColorTheme) => ({
  name: 'wind',
  size: 32,
  color: prop.color !== gradients.night[0]
    ? colors.text.dark
    : colors.text.contrast,
}))``;

export const DropIcon = styled(Feather).attrs((prop: PropColorTheme) => ({
  name: 'droplet',
  size: 32,
  color: prop.color !== gradients.night[0]
    ? colors.text.dark
    : colors.text.contrast,
}))``;
