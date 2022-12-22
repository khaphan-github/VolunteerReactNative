import AppNavigation from './routes/AppNavigation';
import { AuthenticateStackNavigator } from './routes/AuthStack';
import { MainStackNavigator } from './routes/homeStack';
import AsyncStoraged from './Service/client/AsyncStoraged';

const App = () => {
  return (
    AsyncStoraged.getToken() ?
      (<AppNavigation navigate={<MainStackNavigator />} />) :
      (<AppNavigation navigate={<AuthenticateStackNavigator />} />)
  );
};

export default App;