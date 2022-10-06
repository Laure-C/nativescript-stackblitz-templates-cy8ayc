import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from 'react';
import { stackNavigatorFactory } from 'react-nativescript-navigation';

import { ScreenOne } from './ScreenOne';
import { ScreenTwo } from './ScreenTwo';

const StackNavigator = stackNavigatorFactory();

/**
 * The main stack navigator for the whole app.
 */
export const MainStack = () => (
  <BaseNavigationContainer>
    <StackNavigator.Navigator
      initialRouteName="Screen One"
      screenOptions={{
        headerShown: true,
      }}
    >
      <StackNavigator.Screen name="Accueil" component={ScreenOne} />
      <StackNavigator.Screen name="Météo Grenoble" component={ScreenTwo} />
    </StackNavigator.Navigator>
  </BaseNavigationContainer>
);
