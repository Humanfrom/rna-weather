import React from 'react';
import { StyleSheet, Text, View, Image, Platform } from 'react-native';

const TemperatureElement = ({tempr,icon}) =>  {

  let img = require('../assets/img/sun.png');

  switch (icon) {
    case 'Clear':
    img = require('../assets/img/sun.png')
    break;
    case 'Partly Cloudy':
    img = require('../assets/img/partlyCloudy.png')
    break;
    case 'Rain':
    img = require('../assets/img/rain.png')
    break;
    case 'Thunderstorm':
    img = require('../assets/img/strom.png')
    break;
    default:
    img = require('../assets/img/cloud.png')
  }

  const styles = StyleSheet.create({
    tempr: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    iconTempr: {
      width: Platform.OS === 'android' ? 150 : 200,
      height: Platform.OS === 'android' ? 150 : 200,
    },
    textTempr: {
      marginTop: 5,
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: Platform.OS === 'android' ? 120 : 170,
      lineHeight: Platform.OS === 'android' ? 140 : 190,
      textAlign: 'center',
      color: '#fff',
    },
  });

  return(
    <View style={styles.tempr}>
      <Image style={styles.iconTempr} source={img}/>
      <Text style={styles.textTempr}>{tempr}°</Text>
    </View>
  )
}

export default TemperatureElement;
