import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from './../Screen/Home/Home';
import Find from './../Screen/Login/LoginScreen';
import Account from './../Screen/Signup/SignupSingle';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
        screenOptions={({routes})}>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Find" component={Find}/>
            <Tab.Screen name="Account" component={Account}/>
        </Tab.Navigator>
    );
}

export default Tabs;