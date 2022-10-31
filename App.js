import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { MainStackNavigator } from "./routes/homeStack";
const App = () => {
  return (
    <NavigationContainer theme={CustomTheme}>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
}
export default App;