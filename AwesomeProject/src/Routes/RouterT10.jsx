import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import TabNavigatorT10 from './TabNavigatorT10';
import { useAuthContext } from '../Hooks/useAuthContext';
import "react-native-gesture-handler";
import Logout from '../Screens/Logout';
import Welcome from '../Screens/Welcome';

const Drawer = createDrawerNavigator();

export function RouterT10() {
  const { user } = useAuthContext();
  return (
    <Drawer.Navigator 
      initialRouteName={'Welcome'}
      options={{ 
        headerTitle: null
      }}
    >
      {user ? (
        <>
          <Drawer.Screen 
            name="Home" 
            options={{ 
                headerShown: true,
                headerTitle: null
            }}
            //component={Menu}
          >
            {() => (
              <TabNavigatorT10 />
            )}
          </Drawer.Screen>

          <Drawer.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          /> 

          <Drawer.Screen
            name="Logout"
            options={{ headerShown: false }}
            component={Logout}
          /> 
        </>
      ) : (
        <>
          <Drawer.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          /> 
          
        </>
      )}
    </Drawer.Navigator>
);
    
}

