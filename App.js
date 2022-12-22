import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './routes/AppNavigation';
import { AuthenticateStackNavigator } from './routes/AuthStack';
import { MainStackNavigator } from './routes/homeStack';
import AccountScreen from './Screen/Account/AccountSreen';
import ChangeAccountInfoScreen from './Screen/ChangeAccountInfo/ChangeAccountInfoScreen';
import DonateScreen from './Screen/Donate/DonateScreen';
import { HDBankAuthStack } from './Screen/HDBank/HDBankAuthStack';
import HDBankLoginSreen from './Screen/HDBank/HDBankLoginScreenModel';
import HDBankRegisterScreen from './Screen/HDBank/HDBankRegisterScreenInfo';
import Login from './Screen/Login/LoginScreen';
import AsyncStoraged from './Service/client/AsyncStoraged';
import Home from './Screen/Home/Home'
import PostScreen from './Screen/Post/PostScreen'
import Success from './Screen/Donate/Success';
import JoinDetail from './Screen/Home/JoinDetail';
import homeStack from './routes/homeStack'
import JoinScreen from './Screen/Join/JoinScreen';
const App = () => {
  return (
    // <AppNavigation navigate={<MainStackNavigator/>}></AppNavigation>
    <NavigationContainer>
      <MainStackNavigator>
        <Login></Login>
      </MainStackNavigator>
    </NavigationContainer>
  );
};

export default App;