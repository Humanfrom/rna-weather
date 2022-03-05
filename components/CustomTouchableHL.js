import React from 'react';
import { StyleSheet, Text, View, Button, Switch, TouchableHighlight, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
  },
  tinyLogo: {
    width: 30,
    height: 30,
  }
});

const CustomTouchableHL = ({title,onPress=f=>f,icon}) =>  {
  return(
      <TouchableHighlight onPress={() => onPress()}>
       <View style={styles.container}>
        {(icon) ?  <Image style={styles.tinyLogo} source={require(`../assets/img/location-2x.png`)}/> : null}
          <Text>{title}</Text>
        </View>
      </TouchableHighlight>
  )
}

export default CustomTouchableHL;
