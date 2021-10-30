
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Details, Weather} from '../Pages'

const Stack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Weather' screenOptions={{
          headerShown: false,
      }}>
        <Stack.Screen name="Weather" component={Weather} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRoutes;