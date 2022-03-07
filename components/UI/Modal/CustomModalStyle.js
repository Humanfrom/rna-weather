import React from 'react';
import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
   centeredView: {
      flex: 1,
      alignItems: Platform.OS === 'android' ? 'stretch' : 'flex-start',
      padding: Platform.OS === 'android' ? 0 : 70,
      margin: Platform.OS === 'android' ? 20 : 0,
    },
    modalView: {
      marginTop: Platform.OS === 'android' ? 0 : 40,
      backgroundColor: "white",
      borderRadius: 8,
      padding: Platform.OS === 'android' ? 0 : 10,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 2,
        height: 2
      },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 5,
      flexDirection: 'row',
      justifyContent: Platform.OS === 'android' ? 'space-between' : 'flex-start'
    },
    buttonClose: {
      backgroundColor: "transparent",
      padding: 10,
      marginRight: 10,
      elevation: 2
    },
    textStyle: {
      color: "#1086FF",
      textAlign: "center",
      fontSize: 30,
      fontFamily: 'Lato'
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    input: {
      margin: 12,
      borderWidth: 0,
      padding: 10,
      fontSize: 30,
      fontFamily: 'Lato',
    }
});
