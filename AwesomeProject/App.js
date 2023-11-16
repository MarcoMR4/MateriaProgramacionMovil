import React from 'react';
import { Provider } from 'react-redux';
import TodoReduxLayout from './src/screens/TodoReduxLayout';
import { store } from './src/features/store';

function App() {
  return (
    <Provider store={store}>
      <TodoReduxLayout />
    </Provider>
  );  
}

export default App

