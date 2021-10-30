/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, View } from 'react-native';
import { getCurrentWeather } from '../../Services';
import { Button } from '../../Components';

import {
  BarStyle,
  Container,
  CurrentWeather,
  CurrentWeatherInfo,
  CurrentWeatherInfoDescription,
  DropIcon,
  InfoText,
  InfoTextSecundary,
  Location,
  LocationIcon,
  SetUserToOtherPage,
  WindIcon,
  WrapperCurrentWeatherInfo,
  WrapperInfo,
  WrapperLocation,
  WrapperOtherInfos,
} from './styles';

const Weather: React.FC = () => {
  const navigation = useNavigation()


  return (
    <Container>
      <BarStyle />

      <WrapperLocation>
        <LocationIcon />
        <Location>Alegre - ES</Location>
      </WrapperLocation>

      <CurrentWeather />

      <WrapperCurrentWeatherInfo>
        <CurrentWeatherInfo>30ºC</CurrentWeatherInfo>
        <CurrentWeatherInfoDescription>
          Ensolarado
        </CurrentWeatherInfoDescription>
      </WrapperCurrentWeatherInfo>

      <WrapperOtherInfos>
        <WrapperInfo>
          <InfoText>2km/h</InfoText>
          <WindIcon/>
        </WrapperInfo>
        <WrapperInfo>
          <InfoText>3%</InfoText>
          <DropIcon/>
        </WrapperInfo>
      </WrapperOtherInfos>

      <Button text='Atualizar' action={() => getCurrentWeather()}/>
      <SetUserToOtherPage onPress={() => navigation.navigate("Details")}>
        <InfoTextSecundary>Ver detalhes</InfoTextSecundary>
      </SetUserToOtherPage>
    

    </Container>
  );
};

export default Weather;
