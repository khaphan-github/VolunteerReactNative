import { NavigationContainer } from '@react-navigation/native';
import react from 'react';

import {View} from 'react-native';
import { MainStackNavigator } from "./routes/homeStack";
const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default App;

