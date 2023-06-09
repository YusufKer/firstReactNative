import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Two from './screens/Two';
import Three from './screens/Three';
import Test from './screens/Test';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title:"Home"}}
        />
        <Stack.Screen
          name="Two"
          component={Two}
          options={{title:"Two"}}
        />
        <Stack.Screen
          name="Three"
          component={Three}
          options={{title:"Three"}}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  test:{
    color:"red"
  }
});
