import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';


const AppStack = createStackNavigator();

import Recipes from './pages/Recipes';
import Details from './pages/Delail';

export default function Routes() {

  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Recipes" component={Recipes} />
        <AppStack.Screen name="Details" component={Details} />
      </AppStack.Navigator>

    </NavigationContainer>
  )
}