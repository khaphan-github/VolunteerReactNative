import React from "react";
import {createStackNavigator} from '@react-navigation/stack';

import Login from "./../Screen/Login/LoginScreen";
import SignupEmail from "./../Screen/Signup/SignupEmail";
import SignupConfirmEmail from "./../Screen/Signup/SignupConfirmMail";
import SignupType from "./../Screen/Signup/SignupType";
import SignupSingle from "./../Screen/Signup/SignupSingle";
import SignupOrg from "./../Screen/Signup/SignupOrg";
import IntroSlider from './../Screen/StartApp/IntroSlider';
import HomeScreen from "../Screen/Home/Home";
import GoogleAuth from "../Screen/Login/GoogleAuth";
import DonateScreen from '../Screen/Donate/DonateScreen'

const Stack = createStackNavigator();

const AuthenticateStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name='IntroSlider' component={IntroSlider} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignupEmail" component={SignupEmail} />
      <Stack.Screen name="SignupConfirmEmail" component={SignupConfirmEmail} />
      <Stack.Screen name="SignupType" component={SignupType} />
      <Stack.Screen name="SignupSingle" component={SignupSingle} />
      <Stack.Screen name="SignupOrg" component={SignupOrg} />
      <Stack.Screen name='Home' component={HomeScreen}/>
      <Stack.Screen name="Donate" component={DonateScreen} />
      <Stack.Screen name='Google' component={GoogleAuth}/>
    </Stack.Navigator>
  );
}

export { AuthenticateStackNavigator };