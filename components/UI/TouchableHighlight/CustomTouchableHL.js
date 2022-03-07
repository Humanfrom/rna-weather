import React from 'react';
import { Text, View, TouchableHighlight, Image, StyleSheet } from 'react-native';

const CustomTouchableHL = ({title,onPress=f=>f,icon}) =>  {

  const styles = StyleSheet.create({
    title: {
      flex:1,
      flexDirection: 'row',
      margin: 10,
    },
    icon: {
      width: 30,
      height: 30,
    },
    text: {
      marginTop: 5,
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 15,
      lineHeight: 18,
      color: '#fff',
    }
  });

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
