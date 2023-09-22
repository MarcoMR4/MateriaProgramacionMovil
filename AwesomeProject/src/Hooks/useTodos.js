import React, { useState } from "react";
import { handleShowError } from "../Helpers-or-Utils/showError";

export const useTodos = () => {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editTodoId, setEditTodoId] = useState(null);
    const [info, setInfo] = useState([]);
    const [seeModal, setSeeModal] = useState(false);

    const handleAddTodo = () => {
    if (inputValue === '') return handleShowError(
        'Debes ingresar un nombre a la tarea'
    )
    
    const existingTodo = todos.some(
        todo => todo.name.toLowerCase() === inputValue.toLowerCase()
    )
    
    if(existingTodo) return handleShowError(
        'Ya existe una tarea con ese nombre'
    )
        
    if (editMode) {
        const updatedTodos = todos.map((todo) => {
        if (todo.id === editTodoId) {
            return {
            ...todo,
            name: inputValue,
            date: 'Updated at: ' + new Date().toISOString(),
            };
        }
        return todo;
        });
        setTodos(updatedTodos);
        setEditMode(false);
        setEditTodoId(null);
        } else {
        setTodos([
        ...todos,
            {
            id: new Date().toISOString(),
            name: inputValue,
            isCompleted: false,
            date: '',
            createdAt: new Date().toISOString(),
            },
        ]);
        }
    setInputValue('');
    };

    const handleDeleteTodo = (todoId) => {
        const filteredArray = todos.filter(
        (todo) => todo.id !== todoId
        )
        setTodos(filteredArray)  
    }

    const handleCompletedTodo = (todoId) => {
        const mappedArray = todos.map(todo => {
        if(todo.id === todoId){
            return {
            ...todo, 
            isCompleted: todo.isCompleted ? false : true
            }
        }
        return todo;
        })
        setTodos(mappedArray)
    }

    const handleEditTodo = (todoId) => {
        setEditMode(true);
        setEditTodoId(todoId);
        const todoToEdit = todos.find((todo) => todo.id === todoId);
        if (todoToEdit) {
        setInputValue(todoToEdit.name);
        }
    };

    const handleInfo = (id) => {
        setInfo(todos.find((todo) => todo.id === id));
        setSeeModal(!seeModal);
      };

    return {
        inputValue: inputValue,
        todos: todos,
        handleAddTodo,
        handleCompletedTodo, 
        handleEditTodo, 
        editTodoId: editTodoId,
        editMode: editMode,
        handleDeleteTodo,
        setInputValue,
        info,
        seeModal,
        setSeeModal,
        handleInfo,
    }

}