import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenOne from "./screens/ScreenOne";
import ScreenTwo from "./screens/ScreenTwo";

const Stack = createStackNavigator();

function StackNavigator() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="ScreenOne" component={ScreenOne} options={{ title: "" }} />
        <Stack.Screen name="ScreenTwo" component={ScreenTwo} options={{ title: "" }} />

      </Stack.Navigator>
  );
}
export default function App() {
  return (
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
