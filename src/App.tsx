

import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import Snackbar from 'react-native-snackbar';

//constants
import { currencyByRupee } from './constants';
//components
import Currencybutton from './components/currencybutton';
import Currency from './index';


function App(): JSX.Element {

  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: "Please enter a value",
        backgroundColor: '#EA7773',
        textColor: 'black'
      })
    }

    const inputAmount = parseFloat(inputValue)
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`
      setResultValue(result)
      setTargetCurrency(targetValue.name as string)
    }
    else {
      return Snackbar.show({
        text: "not a valid number to convert",
        backgroundColor: '#F4BE2C',
        textColor: 'black'
      })
    }
  }

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>RS.</Text>
            <TextInput
              maxLength={14}
              value={inputValue}
              clearButtonMode='always'
              onChangeText={setInputValue}
              keyboardType='number-pad'
              placeholder='Enter amount in rupees' />
          </View>
          {
            resultValue && (
              <Text style={styles.resultTxt}>
                {resultValue}
              </Text>
            )
          }
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={item => item.name as any}
            renderItem={({ item }) => (
              <Pressable
                style={[
                  styles.button,
                  targetCurrency === item.name && styles.selected
                ]}
                onPress={() => buttonPressed(item)}
              >
                <Currencybutton {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'White'
  },
  resultTxt: {
    fontSize: 32,
    color: 'Black',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: 'Blue',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'pink'
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'yellow',
  },
  bottomContainer: {
    flex: 3,
    backgroundColor: 'white'
  },
  button: {
    flex: 1,

    margin: 12,
    height: 100,
    alignItems: 'center',

    borderRadius: 12,
    backgroundColor: 'white',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: 'white',
  },
});

export default App;
