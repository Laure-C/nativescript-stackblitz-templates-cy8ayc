import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from 'react';
import { stackNavigatorFactory } from 'react-nativescript-navigation';

import { ScreenOne } from './ScreenOne';
import { Information } from './Information';

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
      <StackNavigator.Screen
        name="One"
        component={ScreenOne}
        options={{
          title: 'Accueil',
        }}
      />
      <StackNavigator.Screen
        name="Information"
        component={Information}
        options={{
          title: 'Information',
        }}
      />
    </StackNavigator.Navigator>
  </BaseNavigationContainer>
);
