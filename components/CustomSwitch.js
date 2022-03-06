import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useFonts, Lato_700Bold} from "@expo-google-fonts/lato";

const CustomSwitch = ({
  selectionMode,
  onSelectSwitch
}) => {
  let [fontsLoaded] = useFonts({Lato_700Bold});

  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updatedSwitchData = val => {
    setSelectionMode(val);
    onSelectSwitch(val);
  };

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
        onPress={() => updatedSwitchData(!getSelectionMode)}
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
              color: !getSelectionMode ? 'white' : "#ffffffa0",
              textAlign: "center",
              height: 29,
              width: 38,
              fontSize: 18,
              lineHeight: 22,
              borderTopLeftRadius: 6,
              borderBottomLeftRadius: 6,
              backgroundColor: !getSelectionMode ? "#ffffffa0" : null,
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
              color: getSelectionMode ? 'white' : "#ffffffa0",
              textAlign: "center",
              height: 29,
              width: 38,
              fontSize: 18,
              lineHeight: 22,
              borderTopRightRadius: 6,
              borderBottomRightRadius: 6,
              backgroundColor: getSelectionMode ? "#ffffffa0" : null,
            }}>
            F
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default CustomSwitch;
