import React from 'react';
import { StyleSheet, Text, View, Image, Platform} from 'react-native';

const FooterElement = ({title,value}) =>  {

  return(
       <View style={styles.element}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
  )
}

const styles = StyleSheet.create({
  element: {
    flex:1,
    flexDirection: 'column',
    margin: 10,
    width: '25%'
  },
  title: {
    opacity: 0.6,
    fontFamily: 'Lato',
    fontSize: 15,
    lineHeight: 18,
    color: '#fff',
  },
  value: {
    marginTop: Platform.OS === 'android' ? 0 : 5,
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: Platform.OS === 'android' ? 15 : 25,
    lineHeight: 30,
    color: '#fff',
  }
});

export default FooterElement;
