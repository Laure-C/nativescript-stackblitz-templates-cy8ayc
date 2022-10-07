import { Dialogs } from '@nativescript/core';
import { RouteProp } from '@react-navigation/core';
import * as React from 'react';
import { StyleSheet } from 'react-nativescript';
import { FrameNavigationProp } from 'react-nativescript-navigation';

import { MainStackParamList } from '../NavigationParamList';
import { WeatherByCityService } from '../WeatherByCity';

type ScreenOneProps = {
  route: RouteProp<MainStackParamList, 'One'>;
  navigation: FrameNavigationProp<MainStackParamList, 'One'>;
};

export function ScreenOne({ navigation }: ScreenOneProps) {
  WeatherByCityService.addACityWeather();
  return (
    <flexboxLayout style={styles.container}>
      <label>Bienvenue sur le TP</label>
      <label>React NativeScript</label>
      <button
        onTap={() =>
          navigation.navigate('Information', {
            message: 'Bravo vous savez cliquer',
          })
        }
      >
        Changement de page
      </button>
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
