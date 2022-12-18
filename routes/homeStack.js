import React from "react";
import {createStackNavigator} from '@react-navigation/stack';

import Login from "./../Screen/Login/LoginScreen";
import SignupEmail from "../Screen/Signup/SignupEmail";
import SignupConfirmMail from "./../Screen/Signup/SignupConfirmMail";
import SignupType from "../Screen/Signup/SignupType";
import SignupSingle from "../Screen/Signup/SignupSingle";
import SignupOrg from "../Screen/Signup/SignupOrg";
import Home from "../Screen/Home/Home";
import Tabs from './tabHome';
import DonateScreen from "../Screen/Donate/DonateScreen";
import Success from "../Screen/Donate/Success";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Donate" component={DonateScreen} />
      <Stack.Screen name="Success" component={Success} />

    </Stack.Navigator>
  );
}

export { MainStackNavigator };