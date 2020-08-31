import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RouteTabs from './index';
import Details from '../pages/Details'

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="RouteTabs" component={RouteTabs} />
        <Screen name="Details" component={Details} />
      </Navigator>
    </NavigationContainer>
  )
}