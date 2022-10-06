import { RouteProp } from '@react-navigation/core';
import * as React from 'react';
import { StyleSheet } from 'react-nativescript';
import { FrameNavigationProp } from 'react-nativescript-navigation';

import { MainStackParamList } from '../NavigationParamList';

import { WeatherByCityService } from '../WeatherByCity';
import { LinksIconWeather } from '../LinksIconWeather';

type ScreenTwoProps = {
  route: RouteProp<MainStackParamList, 'Two'>;
  navigation: FrameNavigationProp<MainStackParamList, 'Two'>;
};

export function ScreenTwo({ navigation, route }: ScreenTwoProps) {
  const grenoble = WeatherByCityService.getWeatherByCityName(
    route.params.ville
  );
  return (
    <flexboxLayout>
      <label>Météo {route.params.ville}</label>
      <image src={LinksIconWeather[grenoble.icon]} />
      <label>
        {' '}
        {grenoble.date} {grenoble.temperature}°C {grenoble.vent}km/h humidité :{' '}
        {grenoble.humidité}%{' '}
      </label>
      <label></label>

      <button onTap={() => navigation.goBack()}>Go back</button>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
