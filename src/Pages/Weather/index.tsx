/* eslint-disable prettier/prettier */
import React from 'react';
import { colors, gradients, Background, setImage as Image } from '../../Styles';
import { Button } from '../../Components';
import { useWeather } from '../../Context';

import {
  Container,
  CurrentWeather,
  CurrentWeatherInfo,
  CurrentWeatherInfoDescription,
  DropIcon,
  InfoText,
  Location,
  LocationIcon,
  WindIcon,
  WrapperCurrentWeatherInfo,
  WrapperInfo,
  WrapperLocation,
  WrapperOtherInfos,
} from './styles';

const Weather: React.FC = () => {
  const { currentWeather, getCurrentWeather } = useWeather();

  return (
    <Container background={Background()}>

      <WrapperLocation>
        <LocationIcon color={Background()[0]} />
        <Location color={Background()[0]}>
          {currentWeather.name
            ? `${currentWeather.name} - ${currentWeather.sys.country}`
            : 'Procurando ...'}
        </Location>
      </WrapperLocation>

      <CurrentWeather image={Image(currentWeather.weather[0].main)} />

      <WrapperCurrentWeatherInfo>
        <CurrentWeatherInfo color={Background()[0]}>
          {currentWeather.main.temp
            ? `${Math.round(currentWeather.main.temp)}ºC`
            : '--'}
        </CurrentWeatherInfo>
        <CurrentWeatherInfoDescription color={Background()[0]}>
          {currentWeather.weather[0].description
            ? currentWeather.weather[0].description
            : ''}
        </CurrentWeatherInfoDescription>
      </WrapperCurrentWeatherInfo>

      <WrapperOtherInfos>
        <WrapperInfo>
          <InfoText color={Background()[0]}>
            {currentWeather.wind.speed
              ? `${currentWeather.wind.speed} m/s`
              : '--'}
          </InfoText>
          <WindIcon color={Background()[0]} />
        </WrapperInfo>
        <WrapperInfo>
          <InfoText color={Background()[0]}>
            {currentWeather.main.humidity
              ? `${currentWeather.main.humidity}%`
              : '--'}
          </InfoText>
          <DropIcon color={Background()[0]} />
        </WrapperInfo>
      </WrapperOtherInfos>

      <Button
        text="Atualizar"
        action={() => getCurrentWeather()}
        color={
          Background()[0] !== gradients.night[0]
            ? colors.text.dark
            : colors.text.contrast
        }
      />
    </Container>
  );
};

export default Weather;
