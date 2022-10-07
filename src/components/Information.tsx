import { RouteProp } from '@react-navigation/core';
import * as React from 'react';
import { StyleSheet } from 'react-nativescript';
import { FrameNavigationProp } from 'react-nativescript-navigation';

import { MainStackParamList } from '../NavigationParamList';
import { LinksIconWeather } from '../LinksIconWeather';

type ScreenThreeProps = {
  route: RouteProp<MainStackParamList, 'Information'>;
  navigation: FrameNavigationProp<MainStackParamList, 'Information'>;
};

export function Information({ navigation, route }: ScreenThreeProps) {
  return (
    <flexboxLayout style={styles.container}>
      <label>{route.params.message}</label>
      <image src={LinksIconWeather.clearNight} />
      <button onTap={() => navigation.navigate('One')}>Retour</button>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#272727',
  },
});
