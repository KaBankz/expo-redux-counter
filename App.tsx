import { useState } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
} from './state/counter/counterSlice';
import { AppDispatch, RootState, store } from './state/store';

export default function MainApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  const [incrementAmount, setIncrementAmount] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Counter</Text>
      <Text style={styles.subTitle}>Value: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title='Increment' onPress={() => dispatch(increment())} />
        <Button title='Decrement' onPress={() => dispatch(decrement())} />
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={setIncrementAmount}
          value={incrementAmount}
          keyboardType='numeric'
        />
        <Button
          title='Increment'
          onPress={() => dispatch(incrementByAmount(Number(incrementAmount)))}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
