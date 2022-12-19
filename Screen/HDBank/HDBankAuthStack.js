import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import HDBankLoginScreen from "./HDBankLoginScreen";
import HDBankRegisterScreenInfo from "./HDBankRegisterScreenInfo";
import HDBankOTPScreen from "./HDBankOTPScreen";
import HDBankChangePassScreen from "./HDBankChangePassScreen";
import AccountScreen from "../Account/AccountSreen";
import HDBankAccount from "./HDBankAccount";


const Stack = createStackNavigator();

const HDBankAuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
      {/* <Stack.Screen name='AccountScreen' component={AccountScreen} /> */}
      <Stack.Screen name='HDBankAccount' component={HDBankAccount} />
      <Stack.Screen name='HDBankChangePassword' component={HDBankChangePassScreen} />
      <Stack.Screen name='HDBankLogin' component={HDBankLoginScreen} />
      <Stack.Screen name='HDBankRegisterInfo' component={HDBankRegisterScreenInfo} />
      <Stack.Screen name='HDBankValidateOTP' component={HDBankOTPScreen} />

    </Stack.Navigator>
  );
}

export { HDBankAuthStack };