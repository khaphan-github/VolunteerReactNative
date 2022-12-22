import React, { Fragment } from "react";
import { createStackNavigator } from '@react-navigation/stack';

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
import { AuthenticateStackNavigator } from "./AuthStack";
import IntroSlider from "../Screen/StartApp/IntroSlider";
import GoogleAuth from "../Screen/Login/GoogleAuth";
import ChangeAccountInfoScreen from "../Screen/ChangeAccountInfo/ChangeAccountInfoScreen";
import AccountScreen from "../Screen/Account/AccountSreen";
import PostScreen from "../Screen/Post/PostScreen";
import ConfirmScreen from "../Screen/Donate/ConfirmDonate";
import JoinScreen from "../Screen/Join/JoinScreen";
import ActivitiesList from "../Screen/Join/ActivitiesList";
import joinSuccess from "../Screen/Home/JoinSuccess";
import JoinDetail from "../Screen/Home/JoinDetail"
import QRCheck from "../Screen/Join/QRCheck";
import ScanQR from "../Screen/Join/ScanQR";


const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>

      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name='IntroSlider' component={IntroSlider} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Donate" component={DonateScreen} />
      <Stack.Screen name="Success" component={Success} />
      <Stack.Screen name="SignupEmail" component={SignupEmail} />
      <Stack.Screen name="SignupConfirmEmail" component={SignupConfirmMail} />
      <Stack.Screen name="SignupType" component={SignupType} />
      <Stack.Screen name="SignupSingle" component={SignupSingle} />
      <Stack.Screen name="SignupOrg" component={SignupOrg} />
      <Stack.Screen name='Google' component={GoogleAuth} />
      <Stack.Screen name='ChangeAccountInfo' component={ChangeAccountInfoScreen} />
      <Stack.Screen name='Account' component={AccountScreen} />
      <Stack.Screen name='Post' component={PostScreen} />
      <Stack.Screen name='Confirm' component={ConfirmScreen} />
      <Stack.Screen name='Join' component={JoinScreen} />
      <Stack.Screen name='joinSuccess' component={joinSuccess} />
      <Stack.Screen name='JoinDetail' component={JoinDetail} />
      <Stack.Screen name='Activities' component={ActivitiesList} />
      <Stack.Screen name='QRCheck' component={QRCheck} />
      <Stack.Screen name='ScanQR' component={ScanQR} />

      

    </Stack.Navigator>

  );
}

export { MainStackNavigator };