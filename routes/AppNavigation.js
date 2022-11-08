import { NavigationContainer, DefaultTheme } from '@react-navigation/native';


const AppNavigation = ({navigate}) => {
    return (
        <NavigationContainer theme={CustomTheme}>
            {navigate} 
        </NavigationContainer>
    );
}
const CustomTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  }
export default AppNavigation;