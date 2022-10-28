import react from 'react';
import {View} from 'react-native';
import LoginScreen from './Screen/Login/LoginScreen';
import ContentScreen from './Screen/StartApp/ContentScreen';


export default class App extends react.Component {
  render() {
    return(
        <LoginScreen/>
    )
  }
}