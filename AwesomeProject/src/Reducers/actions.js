
import {
    SET_INPUT_VALUE,
    ADD_TODO,
    DELETE_TODO,
    COMPLETED_TODO,
    EDIT_TODO,
    SET_INFO,
    TOGGLE_MODAL,
  } from './actionTypes';
  
  export const setInputValue = (inputValue) => ({
    type: SET_INPUT_VALUE,
    payload: inputValue,
  });
  
  export const addTodo = () => ({ type: ADD_TODO });
  export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });
  export const completedTodo = (id) => ({ type: COMPLETED_TODO, payload: id });
  export const editTodo = (id) => ({ type: EDIT_TODO, payload: id });
  export const setInfo = (id) => ({ type: SET_INFO, payload: id });
  export const toggleModal = () => ({ type: TOGGLE_MODAL });
  