import AppNavigation from './routes/AppNavigation';
import { AuthenticateStackNavigator } from './routes/AuthStack';
import { MainStackNavigator } from './routes/homeStack';
import AccountScreen from './Screen/Account/AccountSreen';
import ChangeAccountInfoScreen from './Screen/ChangeAccountInfo/ChangeAccountInfoScreen';
import AsyncStoraged from './Service/client/AsyncStoraged';

const App = () => {
  const isValidToken = AsyncStoraged.getToken() !== null;
  return (
       /// <AppNavigation navigate={ !isValidToken ?  <MainStackNavigator/> : <AuthenticateStackNavigator/>}/>
       <ChangeAccountInfoScreen></ChangeAccountInfoScreen>
      );
};
export default App;