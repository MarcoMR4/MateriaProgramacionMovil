import { StatusBar } from 'expo-status-bar';
import Constants from "expo-constants";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Button from './src/Components/Button';
import { useReducer } from 'react';

const CALCULATOR_TYPES = {
  SELECT_NUMBER: 'SELECT_NUMBER',
  SELECT_OPERATOR: 'SELECT_OPERATOR',
  CALCULATE: 'CALCULATE'
}

const initialState = {
  displayNumber: 0,
  operator:'',
  previousNumber: 0,
  currentNumber: 0,
}

function reducer(state, action){
  switch(action.type){
    case CALCULATOR_TYPES.SELECT_NUMBER:
      return {
        ...state,
        currentNumber: action.payload,
        displayNumber: action.payload,
      }
    
    case CALCULATOR_TYPES.SELECT_OPERATOR:
      return {
        ...state,
        operator: action.payload, 
        previousNumber: state.currentNumber
      }

    case CALCULATOR_TYPES.CALCULATE:
      let result = 0
      switch(state.operator){
        case '+': 
        result = parseFloat(state.previousNumber) + parseFloat(state.currentNumber)
        return {
          ...state, 
          displayNumber: result,
          currentNumber: result,
        }
        case '-': 
        result = state.previousNumber - state.currentNumber
        return {
          ...state, 
          displayNumber: result,
          currentNumber: result,
        }
        case 'x': 
        result = state.previousNumber * state.currentNumber
        return {
          ...state, 
          displayNumber: result,
          currentNumber: result,
        }
        case '/': 
        result = state.previousNumber / state.currentNumber
        return {
          ...state, 
          displayNumber: result,
          currentNumber: result,
        }
      }
      return {
        ...state,
        operator: '', 
        displayNumber: state.previousNumber
      }

    default: 
      break;
  }
}

export default function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSelectedNumber = (number) =>  {
    dispatch({type: CALCULATOR_TYPES.SELECT_NUMBER, payload: number})
  }
  //pasarlo de propiedad a los botones para el onpress 

  const handleSelectOperator = (operator) => {
    dispatch({type: CALCULATOR_TYPES.SELECT_OPERATOR, payload: operator})
  }

  const handleCalculate = () => {
    dispatch({type: CALCULATOR_TYPES.CALCULATE})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{state.displayNumber}</Text>
      <View style={styles.row}>
        <Button text={"7"} rol={"number"} onPress={handleSelectedNumber} />
        <Button text={"8"} rol={"number"} onPress={handleSelectedNumber} />
        <Button text={"9"} rol={"number"} onPress={handleSelectedNumber} />
        <Button text={"+"} rol={"operator"} onPress={handleSelectOperator} />
      </View>
      <View style={styles.row}>
        <Button text={"4"} rol={"number"} onPress={handleSelectedNumber} />
        <Button text={"5"} rol={"number"} onPress={handleSelectedNumber} />
        <Button text={"6"} rol={"number"} onPress={handleSelectedNumber} />
        <Button text={"-"} rol={"operator"} onPress={handleSelectOperator} />
      </View>
      <View style={styles.row}> 
        <Button text={"1"} rol={"number"} onPress={handleSelectedNumber} />
        <Button text={"2"} rol={"number"} onPress={handleSelectedNumber} />
        <Button text={"3"} rol={"number"} onPress={handleSelectedNumber} />
        <Button text={"x"} rol={"operator"} onPress={handleSelectOperator} />
      </View>
      <View style={styles.row}>
        
        <Button text={"0"} rol={"number"} onPress={handleSelectedNumber} />
        <Button text={"/"} rol={"operator"} onPress={handleSelectOperator} />
        <Button text={"="} rol={"operator"} onPress={handleCalculate} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
  },
  row: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 40,
  },
});
