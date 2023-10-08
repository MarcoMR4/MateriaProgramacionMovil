import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import Welcome from '../Screens/Welcome';
import Menu from '../Screens/Menu';
import TabNavigatorT10 from './TabNavigatorT10';

const Drawer = createDrawerNavigator();

function RouterT10() {
  return (
    <Drawer.Navigator
        initialRouteName='Login'   
        options={{
            inactiveTintColor: 'red'
        }}
    >
      <Drawer.Screen 
        name="Login" 
        component={Login} 
        options={{
            headerShown: false
        }}
      />
      <Drawer.Screen 
        name="SignUp" 
        component={SignUp} 
        options={{headerShown: false}}
      />
      <Drawer.Screen 
        name="Home" 
        options={{ 
            headerShown: true
        }}
      >
        {() => (
          <TabNavigatorT10 />
        )}

      </Drawer.Screen>
      {/* <Drawer.Screen 
        name="Home"
        
      >
        {() => (
          <TabNavigatorT10 />
        )}
      </Drawer.Screen> */}
    </Drawer.Navigator>
  );
}
export default RouterT10