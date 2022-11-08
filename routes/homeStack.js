import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "../Screen/Home/HomeScreen";
import AccountScreen from "../Screen/Account/AccountSreen";
import ChangeAccountInfoScreen from "../Screen/ChangeAccountInfo/ChangeAccountInfoScreen";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name='Home' component={HomeScreen}/>
      <Stack.Screen name='Account' component={AccountScreen}/>
      <Stack.Screen name='ChangeAccountInfo' component={ChangeAccountInfoScreen}/>
    </Stack.Navigator>
  );
}

export { MainStackNavigator };