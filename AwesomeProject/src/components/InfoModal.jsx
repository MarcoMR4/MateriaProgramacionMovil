import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const InfoModal = ({ info, seeModal, setSeeModal }) => {
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={seeModal}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View
            style={{
              backgroundColor: '#2d705f',
              borderTopRightRadius: 15,
              borderTopLeftRadius: 15,
              paddingHorizontal: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'silver', padding: 10 }}>
              About this task...
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Id:</Text>
            <Text style={styles.infoText}>{info.id}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Task Name:</Text>
            <Text style={styles.infoText}>{info.name}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Created at: {info.createdAt}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>{info.date !== '' ? info.date : 'Unedited'}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Status:</Text>
            <Text style={styles.infoText}>{info.isCompleted ? 'Done' : 'Uncompleted'}</Text>
          </View>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setSeeModal(!seeModal)}
          >
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default InfoModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,    
  },
  modalView: {
    margin: 20,
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 5,
    width:'90%',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    borderBottomLeftRadius: 20,
    borderBottomEndRadius: 20,
    padding: 5,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#8FA7A5',
  },
  infoContainer: {
    backgroundColor: '#077974',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'silver',
  },
  infoText: {
    fontSize: 17,
    color: 'silver',
  },
});