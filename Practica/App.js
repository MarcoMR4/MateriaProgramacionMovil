import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, FlatList, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';

import CustomText  from './src/components/StyleText';
import CustomTouchable from './src/components/StyleButton';
import Login from './src/screens';
import { THEME } from './src/theme/colors';
import Person from './src/components/Person';
import { personImage } from './assets';

  // console.log(heigh)
  // const {width, heigh} = Dimensions.get("screen")

  const DATA = [
    {id: 0, name: 'Marco1' ,apellido: 'Ramirez1', img: personImage },
    {id: 1, name: 'Marco2' ,apellido: 'Ramirez2', img: personImage},
    {id: 2, name: 'Marco3' ,apellido: 'Ramirez3', img: personImage},
    {id: 3, name: 'Marco4' ,apellido: 'Ramirez4', img: personImage},
    {id: 4, name: 'Marco5' ,apellido: 'Ramirez5', img: personImage},
    {id: 5, name: 'Marco6' ,apellido: 'Ramirez6', img: personImage},
    {id: 7, name: 'Marco7' ,apellido: 'Ramirez7', img: personImage},
    {id: 8, name: 'Marco8' ,apellido: 'Ramirez8', img: personImage},
    {id: 9, name: 'Marco9' ,apellido: 'Ramirez9', img: personImage},
    {id: 10, name: 'Marco10' ,apellido: 'Ramirez10', img: personImage},
    {id: 11, name: 'Marco11' ,apellido: 'Ramirez11', img: personImage},
  ]

export default function App() {

  return (
      <View style={styles.liston}>
        <FlatList
          data ={ DATA}
          renderItem = {( {item : {name, apellido, id, img}}) =>
            <Person 
              nombre = {name} 
              apellido={apellido} 
              index = {id} 
              image={img}
            />
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
  liston: {
    
    flexDirection: 'row',

    width: '100%',
    height: '100%',
    marginTop: 40,
   
  },
  elemento: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});



