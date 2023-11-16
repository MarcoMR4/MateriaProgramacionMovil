import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputValue: '',
  todos: [],
  editMode: false,
  editTodoId: null,
  info: [],
  seeModal: false,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    addTodo: (state) => {
      if (state.inputValue === "") {
        handleShowError('Debes ingresar un nombre para la tarea');
        return state;
      }

      let valor = state.inputValue;

      if (valor.length > 10) {
        handleShowError('Debes ingresar menos de 10 caracteres');
        return state;
      }

      const existingTodo = state.todos.some(
        (todo) => todo.name.toLowerCase() === state.inputValue.toLowerCase()
      );

      if (existingTodo) {
        handleShowError('Ya existe una tarea con ese nombre');
        return state;
      }

      if (state.editMode) {
        const updatedTodos = state.todos.map((todo) => {
          if (todo.id === state.editTodoId) {
            return {
              ...todo,
              name: state.inputValue,
              date: 'Updated at: ' + new Date().toISOString(),
            };
          }
          return todo;
        });

        return {
          ...state,
          todos: updatedTodos,
          editMode: false,
          editTodoId: null,
          inputValue: '',
        };
      } else {
        const newTodo = {
          id: new Date().toISOString(),
          name: state.inputValue,
          isCompleted: false,
          date: '',
          createdAt: new Date().toISOString(),
        };

        return {
          ...state,
          todos: [...state.todos, newTodo],
          inputValue: '',
        };
      }
    },
    deleteTodo: (state, action) => {
      const todoIdToDelete = action.payload;
      const filteredArray = state.todos.filter(
        (todo) => todo.id !== todoIdToDelete
      );
      return { ...state, todos: filteredArray };
    },
    completedTodo: (state, action) => {
      const mappedArray = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      });
      return { ...state, todos: mappedArray };
    },
    editTodo: (state, action) => {
      const todoToEdit = state.todos.find(
        (todo) => todo.id === action.payload
      );

      if (todoToEdit) {
        return {
          ...state,
          editMode: true,
          editTodoId: action.payload,
          inputValue: todoToEdit.name,
        };
      }
      return state;
    },
    setInfo: (state, action) => {
      const info = state.todos.find((todo) => todo.id === action.payload);
      return { ...state, info, seeModal: true };
    },
    toggleModal: (state) => {
      return { ...state, seeModal: !state.seeModal };
    },
  },
});

export const {
  setInputValue,
  addTodo,
  deleteTodo,
  completedTodo,
  editTodo,
  setInfo,
  toggleModal,
  showError,
} = tasksSlice.actions;

export default tasksSlice.reducer;
