import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import TabNavigatorT10 from './TabNavigatorT10';
import { useAuthContext } from '../Hooks/useAuthContext';
import "react-native-gesture-handler";
import Logout from '../Screens/Logout';


const Drawer = createDrawerNavigator();

export function RouterT10() {
  const { user } = useAuthContext();
  return (
    <Drawer.Navigator 
      initialRouteName={user ? 'Home' : 'Login'}
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
          >
            {() => (
              <TabNavigatorT10 />
            )}
          </Drawer.Screen>
          {/* <Drawer.Screen
            name="Menu"
            component={Menu}
            options={{ 
              headerShown: false,
              drawerLabel: () => null 
            }}
          />  */}
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
          
        </>
      )}
    </Drawer.Navigator>
);
    
}

