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
  } from './counter/counterSlice';
 import CustomButton from '../components/CustomButton';
  import Todo1 from '../components/Todo1';
  import { FontAwesome5 } from '@expo/vector-icons';
  
  const Counter = () => {
    const todo = useSelector((state) => state.counter.todos);
    const editar = useSelector((state) => state.counter.edit);
    const name = useSelector((state) => state.counter.name);
    const dispatch = useDispatch();
  
    const handleAddTodo = (e) => {
      dispatch(add(name));
      handleChangeName('');
    };
    const handleDeleteTodo = (e) => dispatch(borrar(e));
    const handleCompleteTodo = (e) => dispatch(complete(e));
    const handleEdit = (e) => dispatch(edit(e));
    const handleEditTodo = (e) => {
      dispatch(editTodo(name));
      handleChangeName('');
    };
    const handleChangeName = (e) => dispatch(cambiar(e));
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
            <TextInput
              style={{
                borderWidth: 1,
                paddingHorizontal: 10,
                fontSize: 20,
                flex: 1,
                borderRadius: 5,
                height: 40,
                borderColor: 'silver',
                backgroundColor: 'lightblue'
              }}
              placeholder='Add your task...'
              value={name}
              onChangeText={(value) => handleChangeName(value)}
            />
            {editar.isEdit ? (
              <CustomButton text='Edit task' onPress={handleEditTodo} />
            ) : (
              <CustomButton text='Add task' onPress={handleAddTodo} />
            )}
          </View>
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
              updatedAt={updatedAt}
              isCompleted={completed}
              isEdit={handleEdit}
              handleDelete={handleDeleteTodo}
              handleComplete={handleCompleteTodo}
            />
          )}
        />
      </>
    );
  };
  
  export default Counter;
  
  const styles = StyleSheet.create({});