import { Button, StyleSheet, Text, View } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './state/counter/counterSlice';
import { store } from './state/store';

export default function MainApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter</Text>
      <Text style={styles.subTitle}>Value: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title='Increment' onPress={() => dispatch(increment())} />
        <Button title='Decrement' onPress={() => dispatch(decrement())} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 18,
    marginBottom: 20,
  },
});
