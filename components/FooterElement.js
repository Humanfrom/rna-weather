import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
  element: {
    flex:1,
    flexDirection: 'column',
    margin: 10,
  },
  title: {
    opacity: 0.6,
    fontFamily: 'Lato',
    fontSize: 15,
    lineHeight: 18,
    color: '#fff',
  },
  value: {
    marginTop: 5,
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 25,
    lineHeight: 30,
    color: '#fff',
  }
});

const FooterElement = ({title,value}) =>  {
  return(
       <View style={styles.element}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
  )
}

export default FooterElement;
