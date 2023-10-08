import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from '../Screens/Welcome';
import Menu from '../Screens/Menu';
import { View, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { BLUET10 } from '../Constants/COLORS';

const Tab = createBottomTabNavigator();

function TabNavigatorT10() {
    return (
        
        <View style={styles.container}>

              <Tab.Navigator
                initialRouteName='Home'
              >
                    <Tab.Screen 
                        name="Home" 
                        component={Welcome} 
                        options={
                            {
                                headerShown: false, 
                                tabBarLabel: 'Welcome Home', 
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
                                tabBarLabel: 'Menú', // Etiqueta de la pestaña
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