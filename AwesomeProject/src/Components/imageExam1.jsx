import { View, StyleSheet, Text, Image } from "react-native"


const ImageExam1 = ({name, img }) => {


    return (   
        <View style={styles.container}> 
            <Image 
                style = {styles.image}
                source={{uri: img}}
            />

            <View style={styles.textContainer}> 
                <Text style={{fontWeight: "bold", fontSize: 20, textAlign: "center", color: 'white'}}>{name}</Text>
                
            </View>
       </View>
    )    
}
export default ImageExam1

const styles = StyleSheet.create({ 
    container: {
        overflow: "hidden", 
        borderRadius: 20, 
        borderWidth: 1, 
        borderColor: '#21b2b2',
        width: 200,
        height: 300,
        marginRight: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', // Esto ajusta la imagen para que llene todo el contenedor
        position: 'absolute',
        marginBottom: 200,
    }, 
    textContainer: {
        flex: 1,
        justifyContent: 'flex-end', // Alinea el texto en la parte inferior
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente para el texto
      },
    
})