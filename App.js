import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import { LoginScreen } from './screens/user/Login';
import Index from './screens/Main/Index';
import TripList from './screens/Trips/TripList';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegistrationScreen } from './screens/user/Register';
import SearchPage from './screens/SearchPage/SearchPage';
import Cars from './screens/Cars/Cars';
import Parameters from './screens/Parameters/Parameters';
import Alerts from './screens/Alerts/Alerts';

const Stack = createNativeStackNavigator();

export default function App() {
  return (  
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="login"
      >
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={RegistrationScreen} />
        <Stack.Screen name="search" component={SearchPage}/>
        <Stack.Screen name="cars" component={Cars}/>
        <Stack.Screen name="parameters" component={Parameters} />
        <Stack.Screen name="main" component={TripList} />
        <Stack.Screen name="alerts" component={Alerts} />

        
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D4E1FA',
  },
});
