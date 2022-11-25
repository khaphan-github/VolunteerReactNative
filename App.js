import { NavigationContainer, StackActions } from '@react-navigation/native';
import react from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainStackNavigator } from "./routes/homeStack";
import Home from './Screen/Home/Home.jsx';



const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    // <NavigationContainer>
    //     <MainStackNavigator />
    // </NavigationContainer>
    
    <Home/>

  );
};
export default App;

