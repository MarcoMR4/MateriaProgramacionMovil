import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, FlatList, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';

import CustomText  from './src/components/StyleText';
import CustomTouchable from './src/components/StyleButton';
import Login from './src/screens';
import { THEME } from './src/theme/colors';
import Person from './src/components/Person';

  // console.log(heigh)
  // const {width, heigh} = Dimensions.get("screen")

  const DATA = [
    {id: 0, name: 'Marco1' ,apellido: 'Ramirez1'},
    {id: 1, name: 'Marco2' ,apellido: 'Ramirez2'},
    {id: 2, name: 'Marco3' ,apellido: 'Ramirez3'},
    {id: 3, name: 'Marco4' ,apellido: 'Ramirez4'},
    {id: 4, name: 'Marco5' ,apellido: 'Ramirez5'},
  ]

export default function App() {

  return (
      <View style={styles.item}>
        <FlatList
          data ={ DATA}
          renderItem = {( {item : {name, apellido, id}}) =>
            <Person nombre = {name} apellido={apellido} index = {id} />
          }
          ItemSeparatorComponent={
            <Text>Separador</Text>
          }
        />
      </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    flex: 1,
    width: 400,
    height: '100%',
    marginTop: 40,
   
  },
  elemento: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});



