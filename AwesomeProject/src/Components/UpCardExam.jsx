import { View, Text } from "react-native"

const UpCardExam = ({text}) => {
    return (
        <View style={{width: 30, height: 20, backgroundColor: '#242736', borderRadius: 15, marginRight: 12,}}>
        <Text style={{color: 'white', fontSize: 10}}>{text}</Text>

        </View>
    )
    
    
}
export default UpCardExam