import React from 'react';
import { StyleSheet, Text, View, Button, Switch, Image, Platform, Modal, Pressable, TextInput} from 'react-native';
import { styles } from './CustomModalStyle.js'

const CustomModal = ({modal,setModal,selectCity}) =>  {

  return(
    <Modal
      animationType="fade"
      transparent={true}
      visible={modal.visible}
      onRequestClose={() => {
        setModal({...modal, visible:false});
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput
              style={styles.input}
              onChangeText={event => setModal({...modal, title:event})}
              value={modal.title}
          />
          <Pressable
            style={styles.buttonClose}
            onPress={() => {selectCity(modal.title), setModal({...modal, visible:false})}}
          >
            <Text style={styles.textStyle}>OK</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

export default CustomModal;
