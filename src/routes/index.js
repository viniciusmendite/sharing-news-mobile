import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import News from '../pages/News'
import Add from '../pages/Add'

const { Navigator, Screen } = createBottomTabNavigator();

export default function RouteTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
          paddingBottom: 0,
        },
        tabStyle: {
          flexDirection: 'row',
          alginItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'Ubuntu_700Bold',
          fontSize: 14,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#3F3D56',
        keyboardHidesTabBar: true,
      }}
    >
        <Screen 
        name="News"
        component={News}
        options={{
          tabBarLabel: 'News',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Feather name="list" size={size} color={focused ? '#3F3D56' : color} />
            )
          }
        }}
      />

      <Screen 
        name="Add"
        component={Add}
        options={{
          tabBarLabel: 'Add',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Feather name="plus-circle" size={size} color={focused ? '#3F3D56' : color} />
            )
          }
        }}
      />
    </Navigator>
  )
}