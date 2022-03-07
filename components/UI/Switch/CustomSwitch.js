import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const CustomSwitch = ({selectionMode, onSelectSwitch}) => {

  return (
    <View style={{
      flexDirection: 'row',
    }}>
    <Text style={{
      fontFamily: 'Lato',
      color: "#ffffffa0",
      fontSize: 18,
      lineHeight: 22,
      marginRight: 5,
    }}>° </Text>
      <TouchableOpacity
        onPress={() => onSelectSwitch(!selectionMode)}
        style={{
          height: 29,
          width: 77,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: 'white',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flex: 1,
            borderTopLeftRadius: 6,
            borderBottomLeftRadius: 6,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Lato',
              color: !selectionMode ? 'white' : "#ffffffa0",
              textAlign: "center",
              height: 29,
              width: 38,
              fontSize: 18,
              lineHeight: 25,
              borderTopLeftRadius: 6,
              borderBottomLeftRadius: 6,
              backgroundColor: !selectionMode ? "#ffffffa0" : null,
            }}>
            C
          </Text>
        </View>
        <View
        style={{
          flex: 1,
          borderTopRightRadius: 6,
          borderBottomRightRadius: 6,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text
            style={{
              fontFamily: 'Lato',
              color: selectionMode ? 'white' : "#ffffffa0",
              textAlign: "center",
              height: 29,
              width: 38,
              fontSize: 18,
              lineHeight: 25,
              borderTopRightRadius: 6,
              borderBottomRightRadius: 6,
              backgroundColor: selectionMode ? "#ffffffa0" : null,
            }}>
            F
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default CustomSwitch;
