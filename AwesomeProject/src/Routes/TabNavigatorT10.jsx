import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from '../Screens/Welcome';
import Menu from '../Screens/Menu';
import { View, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { BLUET10 } from '../Constants/COLORS';
import Account from '../Screens/Account';


const Tab = createBottomTabNavigator();

function TabNavigatorT10() {
    return (
        
        <View style={styles.container}>

              <Tab.Navigator
                initialRouteName='Menu'
              >
                    <Tab.Screen 
                        name="Account" 
                        component={Account} 
                        options={
                            {
                                headerShown: false, 
                                tabBarLabel: 'Account', 
                                tabBarIcon: () => (
                                    <FontAwesome name="home" size={30} color={BLUET10} />
                                ),
                            }
                            
                        }
                    />
                    <Tab.Screen 
                        name="Menu" 
                        component={Menu} 
                        options={
                            {
                                headerShown: false,
                                tabBarLabel: 'Menú', 
                                tabBarIcon: () => (
                                    <Ionicons name="ios-restaurant" size={24} color={BLUET10} />
                                ),
                            }
                        }
                    />
                </Tab.Navigator>
        </View>
    
    );
}
export default TabNavigatorT10

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})