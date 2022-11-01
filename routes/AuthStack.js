import React from "react";
import {createStackNavigator} from '@react-navigation/stack';

import Login from "./../Screen/Login/LoginScreen";
import Signup from "./../Screen/Signup/SignupScreen";
import IntroSlider from './../Screen/StartApp/IntroSlider';
import HomeScreen from "../Screen/Home/HomeScreen";
import AccountScreen from "../Screen/Account/AccountSreen";

const Stack = createStackNavigator();

const AuthenticateStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name='IntroSlider' component={IntroSlider} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name='Home' component={HomeScreen}/>
    </Stack.Navigator>
  );
}

export { AuthenticateStackNavigator };