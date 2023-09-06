import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { THEME } from '../../theme/color';

const NARANJA1 = THEME.COLORS.NARANJA1

export default function WithdrawContent() {
  return (
    <View style={styles.container}>

        <View style = {styles.container1}>
            <View style = {styles.container12}>
                <Text style = {styles.texto1}>
                    Current Wallet balance
                </Text>
                <Text style = {styles.textoBalance}>
                    $23,867
                </Text>
            </View>
            <View style = {styles.plus}>
                <TouchableOpacity>
                    <MaterialCommunityIcons 
                        name="plus-thick" 
                        size={30} 
                        color={NARANJA1}
                    />
                </TouchableOpacity>
            </View>
        </View>

        <View style = {styles.container2}>
            <Text style = {styles.texto1}>
                    Withdraw Amount
            </Text>
            <Text style = {styles.textoMonto}>
                   $19,29.<Text style = {{opacity: 0.2}}>00</Text>
            </Text>
        </View>

        <View style = {styles.container3}>
            <Text style = {styles.numero}>
                    1 2 3 4
            </Text>
            <Text style = {styles.numero}>
                    5 6 7 8
            </Text>
            <Text style = {styles.numero}>
                    O 9 0 X
            </Text>
        </View>

        <View style = {{alignItems: 'center', padding: 10}}>
            <View style = {styles.container4}>
                <View style = {styles.flecha}>
                    <TouchableOpacity>
                    <Ionicons 
                    name="md-arrow-forward-outline" 
                    size={25} 
                    color={NARANJA1} 
                    />
                    </TouchableOpacity>
                </View>
                <Text style = {styles.texto4}>
                        Swipe to withdraw
                </Text>
            </View>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',

  },
  container1: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
  },
  container12: {
    flexDirection: 'column',
  },
  texto1: {
    opacity: 0.5,
    color: 'black',
  },
  textoBalance: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25
  }, 
  plus: {
    backgroundColor: THEME.COLORS.NARANJA1,
    opacity: 0.15,
    borderRadius: 30,
    width: 50,
    height: 50,
    alignItems: 'center',
    padding: 8,
  },
  container2: {
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  textoMonto: {
    color: NARANJA1,
    fontWeight: 'bold',
    fontSize: 30
  },
  container3: {
    alignItems: 'center',
  },
  container4: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: NARANJA1,
    width: '80%',
    height: 60,
    borderRadius: 30,
    paddingTop: 1,
    justifyContent: 'center',
  }, 
  texto4: {
    color: 'white',
    fontSize: 15, 
    marginRight: 20,
  },
  flecha: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: 45,
    height: 45,
    padding: 9,
    marginRight: 60,
  },
  numero: {
    fontSize: 20
  }
});