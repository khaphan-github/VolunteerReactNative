import AppNavigation from './routes/AppNavigation';
import { AuthProvider } from './routes/AuthContext';
import { AuthenticateStackNavigator } from './routes/AuthStack';
import { MainStackNavigator } from './routes/homeStack';
import AsyncStoraged from './Service/client/AsyncStoraged';

const App = () => {
  const isValidToken = AsyncStoraged.getToken() !== null;
  return (
      <AppNavigation navigate={ !isValidToken ?  <MainStackNavigator/> : <AuthenticateStackNavigator/>}/>
  );
};
export default App;