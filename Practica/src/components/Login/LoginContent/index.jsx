import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { THEME } from '../../../theme/colors';
import { googleImage, facebookImage } from '../../../../assets';
import CustomImage from '../../CustomImage';



export default function LoginContent(){

    return (
        <View style={styles.container}>
          <View style={styles.form}>
            <TextInput value='marcomr@mail.com' style={styles.input} placeholder='Email'></TextInput>
            <TextInput secureTextEntry={true} style={styles.input} placeholder='Password'></TextInput>
            
            <TouchableOpacity>
              <Text style={styles.text1} >Forgot Password??</Text>
            </TouchableOpacity>
            

            <TouchableOpacity style={styles.buttonLogin}>
                <Text style={styles.text2} >Login</Text>
            </TouchableOpacity>

          </View>

          <View style = {{flexDirection:'row'}} >
            <View style={styles.line}></View>
            <View>
              <Text>Or login wit</Text>
            </View>
            <View style={styles.line}></View>
          </View>

          <View style = {{flexDirection:'row', marginTop: 20, justifyContent:'space-around'}} >
          
            <TouchableOpacity style = {styles.iconButton}>
              <CustomImage
                source={googleImage} 
                imageStyle={styles.customImage}  
              />
              <Text >Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.iconButton}>
              <CustomImage
                source={facebookImage} 
                imageStyle={styles.customImage}  
              />
              <Text >Facebook</Text>
            </TouchableOpacity>

          </View>
          
          <View style = {{flexDirection:'row', marginTop: 20, justifyContent:'center'}} >
            <Text >Don't have an account?</Text>
            <TouchableOpacity>
              <Text syle = {styles.text3}> Register </Text>
            </TouchableOpacity>
            
          </View>
        
        </View>
    );
}

const {DARK_BLUE, GREEN } = THEME.COLORS

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    form: {
      gap: 20,
      marginBottom: 40,
    },
    input: {
        width: 300,
        height: 40,
        textAlign: 'left',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'silver',
        marginTop: 30,
        paddingVertical: 5,
      },
    text1: {
        color: THEME.COLORS.GREEN,
        textAlign: 'right',
        marginLeft: 150,
        marginTop: 20,
        fontWeight: 'bold',
    },
    text2: {
        color: THEME.COLORS.DARK_BLUE,
        textAlign: 'center',
        fontWeight: 'bold',
        textAlignVertical: 'center',
        fontSize: 15,
    },
    buttonLogin: {
        backgroundColor: THEME.COLORS.GREEN,
        borderRadius: 10,
        marginTop: 20,
        width: 300,
        height: 40,
        padding: 5,
    },
    line: {
      borderBottomWidth: 1,
      flex: 1,
      borderColor: THEME.COLORS.GRAY,
      marginTop: 15,
      marginBottom: 20,

    },
    image: {
      height: 20,
      width: 20,
    },
    iconButton: {
      borderWidth: 1,
      borderBlockColor: THEME.COLORS.GRAY,
      width: 120,
      height: 40,
      flexDirection: 'row',
      padding: 7,
      justifyContent: 'space-evenly',
      borderRadius: 10,
      margin: 10,
    }, 
    text3: {
      color: THEME.COLORS.GREEN,
    },
          
});
    
