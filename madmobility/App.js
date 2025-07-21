import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';
import { EMTProvider } from './src/context/EMTContext';

export default function App() {
  return (
    <EMTProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </EMTProvider>
  );
}