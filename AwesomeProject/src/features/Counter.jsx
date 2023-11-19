import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, { useState } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import {
    add,
    borrar,
    complete,
    edit,
    editTodo,
    cambiar,
    see,
    toggleModal
  } from './counter/counterSlice';
  import TodoInput from '../components/TodoInput';
  import CustomButton from '../components/CustomButton';
  import Todo1 from '../components/Todo1';
  import { FontAwesome5 } from '@expo/vector-icons';
  import InfoModal from '../components/InfoModal';
  import {handleShowError} from '../helpers-or-Utils/showError';

  
  const Counter = () => {
    const [inputValue, setInputValue] = useState('')
    const todo = useSelector((state) => state.counter.todos);
    const isEdit = useSelector((state) => state.counter.edit.isEdit);
    const name = useSelector((state) => state.counter.name);
    const info = useSelector((state) => state.counter.info)
    const seeModal = useSelector((state) => state.counter.seeModal)
    const dispatch = useDispatch();
  
    const handleAddTodo = (e) => {
      if (inputValue === "") {
        handleShowError('Debes ingrear un nombre a la tarea')
        return 
      };
      if(inputValue.length > 10){
        handleShowError('Debes ingresar menos de 10 caracteres')
        return
      }  
      const existingTodo = todo.some(
          (todo) => todo.name.toLowerCase() === inputValue.toLowerCase()
      )
      if(existingTodo){
        handleShowError(
            'Ya existe una tarea con ese nombre'
        )
        return 
      }
      dispatch(add(name));
      handleChangeName('');
    };
    const handleDeleteTodo = (e) => dispatch(borrar(e));
    const handleCompleteTodo = (e) => dispatch(complete(e));
    const handleEdit = (e) => dispatch(edit(e));
    const handleEditTodo = () => {
      if (inputValue === "") {
        handleShowError('Debes ingrear un nombre a la tarea')
        return 
      };
      if(inputValue.length > 10){
        handleShowError('Debes ingresar menos de 10 caracteres')
        return
      }  
      const existingTodo = todo.some(
          (todo) => todo.name.toLowerCase() === inputValue.toLowerCase()
      )
      if(existingTodo){
        handleShowError(
            'Ya existe una tarea con ese nombre'
        )
        return 
      }
      dispatch(editTodo(name));
      handleChangeName('');
    };
    const handleChangeName = (e) => dispatch(cambiar(e));
    const handleInfoTodo = (e) => {
      console.log(info)
      dispatch(see(e));
      dispatch(toggleModal()); 
    };
    
    return (
      <>
        <View>
          <View style={{ borderRadius: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text
              style={{
                fontSize: 40,
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'silver',
              }}
            >
              To Do List
            </Text>
            <FontAwesome5 name="tasks" size={35} color="silver" style={{marginTop: 18}} />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 20, gap: 20 }}>
            <TodoInput
              value={name}
              onChangeText={(value) => {
                handleChangeName(value)
                setInputValue(value)
              }}
            />
            {isEdit ? (
              <CustomButton text='Edit task' onPress={handleEditTodo} />
            ) : (
              <CustomButton text='Add task' onPress={handleAddTodo} />
            )}
          </View>
        </View>

        <View>
          <InfoModal info={info} seeModal={seeModal} setSeeModal={() => dispatch(toggleModal())} />
        </View>

        <FlatList
          data={todo}
          renderItem={({
            item: { id, name, completed, createAt, updatedAt },
          }) => (
            <Todo1
              name={name}
              id={id}
              createAt={createAt}
              date={updatedAt}
              isCompleted={completed}
              handleEdit={handleEdit}
              handleDelete={handleDeleteTodo}
              handleComplete={handleCompleteTodo}
              handleInfo = {handleInfoTodo}
            />
          )}
        />
  
      </>
    );
  };
  
  export default Counter;
  
  const styles = StyleSheet.create({});