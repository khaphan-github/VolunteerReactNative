import react from 'react';
import {View} from 'react-native';
import LoginScreen from './Screen/Login/LoginScreen.jsx';
export default class App extends react.Component {
  render() {
    return(
      <View>
        <LoginScreen/>
      </View>
    )
  }
}