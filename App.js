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
import LoginScreen from './Screen/Signup/SignupScreen';
import AsyncStoraged from './Service/client/AsyncStoraged';

const App = () => {
  return (
    <AppNavigation navigate={<HDBankAuthStack/>}></AppNavigation>
    //  <LoginScreen></LoginScreen>
    //<HDBankRegisterScreen/>
    //  <HDBankLoginSreen isModelVisible={true}/>
   //  <DonateScreen></DonateScreen>

  );
};

export default App;