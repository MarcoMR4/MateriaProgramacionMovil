import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';
import Screen1Exam from '../Screens/Screen1Exam';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import Screen2Exam from '../Screens/Screen2Exam';


const Tab = createBottomTabNavigator();

function TabNavigatorExam() {
    return (
        
        <View style={styles.container}>

              <Tab.Navigator
                initialRouteName='Home'
              >
                    <Tab.Screen 
                        name="Home" 
                        component={Screen1Exam} 
                        options={
                            {
                                headerShown: false,
                                tabBarLabel: 'Home', 
                                tabBarIcon: () => (
                                    <FontAwesome name="home" size={30} color={'silver'} />
                                ),
                            }
                        }
                    />
                    <Tab.Screen 
                        name="Screen2" 
                        component={Screen2Exam} 
                        options={
                            {
                                headerShown: false,
                                tabBarLabel: 'Screen2', 
                                
                            }
                        }
                    />
                </Tab.Navigator>
        </View>
    
    );
}
export default TabNavigatorExam

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})