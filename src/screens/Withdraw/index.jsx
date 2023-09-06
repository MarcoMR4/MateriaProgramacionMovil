import { StyleSheet, View } from 'react-native';
import WithdrawHeader from '../../components/WithdrawHeader';
import WithdrawContent from '../../components/WithdrawContent';

export default function Withdraw() {
  return (
    <View style={styles.container}>
        <View style={styles.elemento1}>
            <WithdrawHeader  />
        </View>
        <View style={styles.elemento2}>
             <WithdrawContent />
        </View>
        
        
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  elemento1: {
    flex: 1,
    width: 400,
    height: '20%',
  },
  elemento2: {
    flex: 1,
    width: 400,
    height: '70%',
  }
});