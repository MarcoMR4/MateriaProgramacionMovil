import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from '../features/store';
import Counter from '../features/Counter';
import { TodoContainer } from '../constants/colors';

export default function TodoReduxLayout() {

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Counter />
        <StatusBar style='auto' />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: TodoContainer,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
});