import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Number } from './src/Components/Number';
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
        currentNumber: action.payload
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
        result = state.previousNumber + state.currentNumber
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
      return state
  }
}

export default function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSelectedNumber = (number) =>  {
    dispatch({type: CALCULATOR_TYPES.SELECT_NUMBER, payload: number})
  }
  //pasarlo de propiedad a los botones para el onpress 

  const handleSelectOperator = () => {
    dispatch({type: CALCULATOR_TYPES.SELECT_OPERATOR, payload: operator})
  }

  const handleCalculate = () => {
    dispatch({type: CALCULATOR_TYPES.CALCULATE, payload: operator})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text} >{state.displayNumber}</Text>

      <TouchableOpacity>
        <Number number='1' role={"number"} />
      </TouchableOpacity>
      <Text>Open up App.js to start working on your app!</Text>

      <StatusBar style="auto" />
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
  text:{

  },
  row:{

  },
});
