import { colors } from '../../Styles';
import { Entypo, Feather } from '../../Utils'
import styled from 'styled-components/native';


import image from '../../Assets/sunny.png';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;

  background-color: ${colors.primary.main};
`;

export const BarStyle = styled.StatusBar.attrs({
    backgroundColor: colors.primary.main,
    color: colors.primary.contrast
})``

export const WrapperLocation = styled.View`
    width: 80%;

    margin-top: 30px;
    margin-bottom: 50PX;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

`

export const LocationIcon = styled(Entypo).attrs({
    name: "location-pin",
    size: 32,
    color: colors.text.dark

})``

export const Location = styled.Text`

    color: ${colors.text.dark};
    font-size: 20px;
    font-weight: bold;

`

export const CurrentWeather = styled.Image.attrs({
    source: image
})`
    width: 50%;
    height: 25%;
    margin-bottom: 40px;
`
export const WrapperCurrentWeatherInfo = styled.View`
    justify-content: center;
    align-items: center;
`

export const CurrentWeatherInfo = styled.Text`
    color: ${colors.text.dark};
    font-size: 48px;
`

export const CurrentWeatherInfoDescription = styled.Text`
    color: ${colors.text.main};
    font-size: 20px;
`

export const WrapperOtherInfos = styled.View`
    width: 90%;

    margin-top: 30px;
    margin-bottom: 50px;

    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

export const WrapperInfo = styled.View`
    justify-content: center;
    align-items: center;
`

export const InfoText = styled.Text`
    color: ${colors.text.main};
    font-size: 20px;
    font-weight: 500;
    text-align: center;
`

export const WindIcon = styled(Feather).attrs({
    name: 'wind',
    size: 32,
    color: colors.text.main
})``


export const DropIcon = styled(Feather).attrs({
    name: 'droplet',
    size: 32,
    color: colors.text.main
})``

export const SetUserToOtherPage = styled.Text`
    margin-top: 10px;
`
export const InfoTextSecundary = styled.Text`
    color: ${colors.text.main};
    font-size: 18px;
    text-align: center;
`