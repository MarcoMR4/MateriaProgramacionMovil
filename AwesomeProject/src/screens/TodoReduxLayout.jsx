import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setInputValue,
  addTodo,
  deleteTodo,
  completedTodo,
  editTodo,
  setInfo,
  toggleModal,
} from '../Reducers/TasksSlice';

import { View, Text, FlatList } from 'react-native';
import Todo1 from '../components/Todo1';
import TodoInput from '../components/TodoInput';
import InfoModal from '../components/InfoModal';
import CustomButtonText from '../components/CustomButtonText';
import { FontAwesome5 } from '@expo/vector-icons';
import { TodoContainer } from '../constants/colors';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';

export const TodoReduxLayout = () => {
  const dispatch = useDispatch();
  const {
    inputValue,
    todos,
    editMode,
    editTodoId,
    info,
    seeModal,
  } = useSelector((state) => state.tasks);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={{ justifyContent: 'center', paddingHorizontal: 20, paddingTop: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'white',
              marginBottom: 15,
            }}
          >
            To do List
          </Text>
          <FontAwesome5 name="tasks" size={35} color="silver" />
        </View>

        <View style={{ flexDirection: 'row', marginTop: 20, gap: 20 }}>
          <TodoInput
            value={inputValue}
            onChangeText={(value) => dispatch(setInputValue(value))}
          />
          <CustomButtonText
            text={editMode ? 'Edit task' : 'Add task'}
            onPress={() => {
              dispatch(addTodo());
              // Limpia el input después de agregar/editar una tarea
              dispatch(setInputValue(''));
            }}
          />
        </View>

        <View>
          <InfoModal info={info} seeModal={seeModal} setSeeModal={() => dispatch(toggleModal())} />
        </View>

        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item: { name, id, isCompleted, date } }) => (
            <Todo1
              name={name}
              id={id}
              handleDelete={() => dispatch(deleteTodo(id))}
              isCompleted={isCompleted}
              handleCompleted={() => dispatch(completedTodo(id))}
              handleEdit={() => dispatch(editTodo(id))}
              date={date}
              handleInfo={() => dispatch(setInfo(id))}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: TodoContainer,
    paddingTop: Constants.statusBarHeight + 10,
    padding: 15,
  },
};
