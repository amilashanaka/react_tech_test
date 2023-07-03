import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashBoard from './Screens/Dashboard/DashBoard';
import * as ScreenOrientation from 'expo-screen-orientation'


export default function App() {
  const [orientationIsLandscape,setOrientation]=useState(true)

  const Stack = createNativeStackNavigator();
  const navigationOptions = {headerShown: false};
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen 
        name="dashboard"
        component={DashBoard}
        options={navigationOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
