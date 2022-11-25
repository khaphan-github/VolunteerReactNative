import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from "./../Screen/Login/LoginScreen";
import SignupEmail from "../Screen/Signup/SignupEmail";
import SignupConfirmMail from "./../Screen/Signup/SignupConfirmMail";
import SignupType from "../Screen/Signup/SignupType";
import SignupSingle from "../Screen/Signup/SignupSingle";
import SignupOrg from "../Screen/Signup/SignupOrg";
import Home from "../Screen/Home/Home";
import Tabs from './tabHome';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignupType" component={SignupType} /> 
      <Stack.Screen name="SignupEmail" component={SignupEmail} />
      <Stack.Screen name="SignupConfirmMail" component={SignupConfirmMail} /> 
      <Stack.Screen name="SignupSingle" component={SignupSingle} />
      <Stack.Screen name="SignupOrg" component={SignupOrg} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Bottom" component={Tabs}/>
    </Stack.Navigator>
  );
}

export { MainStackNavigator };