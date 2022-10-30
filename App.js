import react from 'react';
import {View} from  'react-native'
import NoConnection from './Screen/Error/NoConnection';
import LoginScreen from './Screen/Login/LoginScreen';
import IntroSlider from './Screen/StartApp/IntroSlider';
import Connection from './Service/client/Connection';



export default class App extends react.Component {
  render() {

    return (
      <IntroSlider/>
    );
  }
}