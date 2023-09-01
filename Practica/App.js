import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, FlatList, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';

import CustomText  from './src/components/StyleText';
import CustomTouchable from './src/components/StyleButton';
import Login from './src/screens';
import { THEME } from './src/theme/colors';
import Person from './src/components/Person';
import { personImage, downImage, upDImage, plusImage } from './assets';

  // console.log(heigh)
  // const {width, heigh} = Dimensions.get("screen")

  const DATA = [
    {id: 0, name: 'Marco1' ,apellido: 'Ramirez1', img: personImage },
    {id: 1, name: 'Marco2' ,apellido: 'Ramirez2', img: personImage},
    {id: 2, name: 'Marco3' ,apellido: 'Ramirez3', img: personImage},
    {id: 3, name: 'Marco4' ,apellido: 'Ramirez4', img: personImage},
   
  ]

export default function App() {

  return (
    <View style = {styles.container}>
      
      <View style = {styles.cont1}>
        <Image source={personImage} style = {styles.imgI} />
        <Text style = {styles.t1}>Morning. </Text>
        <Text style = {style.t2}>Imran </Text>
      </View>

      <Text style = {styles.t1}>Your balance</Text>
      <Text style = {styles.t3}>$1,600.00</Text>

      <View style = {styles.cont2}>
        <View style = {{flex: 1, flexDirection: 'column'}}>
          <Image source={upDImage} style = {styles.imgI2}  />
          <Text style = {styles.t1}>Send </Text>
        </View>
        <View style = {{flex: 1, flexDirection: 'column'}}>
          <Image source={downImage} style = {styles.imgI2}  />
          <Text style = {styles.t1}>Receive </Text>
        </View>
        <View style = {{flex: 1, flexDirection: 'column'}}>
          <Image source={plusImage} style = {styles.imgI2} />
          <Text style = {styles.t1}>Add</Text>
        </View>
      </View>

      <View style={styles.liston}>

        <FlatList
          data ={ DATA}
          horizontal={false}
          numColumns = {2} 
          pagingEnabled={true}
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

    </View>

        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  cont1: {
    flex: 1,
    flexDirection: 'Row',
    alignItems: 'center',
  },
  cont2: {
    flex: 1,
    flexDirection: 'Row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  liston: {
    width: '100%',
    height: '100%',
    marginTop: 50,
  },
  elemento: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  t1: {
    color: 'silver',
    fontWeight: 'bold',
    fontSize: 20,
  },
  t2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  t3: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 80,
  },
  imgI: {
    width: 20,
    height: 20,
    borderRadius: 50
  },
  imgI2: {
    width: 40,
    height: 40,
    borderRadius: 50
  }
});



