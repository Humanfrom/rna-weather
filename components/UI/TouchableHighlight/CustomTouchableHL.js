import React from 'react';
import { Text, View, TouchableHighlight, Image, StyleSheet } from 'react-native';
import { styles } from './CustomTouchableHLStyle.js'

const CustomTouchableHL = ({title,onPress=f=>f,icon}) =>  {

  return(
      <TouchableHighlight onPress={() => onPress()}>
       <View style={styles.title}>
        {(icon) ?  <Image style={styles.icon} source={require(`../../../assets/img/location-2x.png`)}/> : null}
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableHighlight>
  )
}

export default CustomTouchableHL;
