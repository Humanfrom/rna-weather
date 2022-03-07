import React from 'react';
import { StyleSheet, Text, View, Image, Platform } from 'react-native';
import CustomTouchableHL from './UI/TouchableHighlight/CustomTouchableHL.js'
import CustomSwitch from './UI/Switch/CustomSwitch.js'

const HeaderElement = ({onPressCity, onPressGeo, city, farenheit, setMetric}) =>  {

  return(
    <View style={styles.select}>
      <View style={{flexDirection: 'column'}}>
      <Text style={styles.headText}>{city}</Text>
      <View style={styles.buttons}>
        <CustomTouchableHL title={'Сменить город'} onPress={onPressCity}/>
        <CustomTouchableHL title={'Моё местоположение'} onPress={onPressGeo} icon={'location'}/>
      </View>
     </View>
     <CustomSwitch selectionMode={farenheit} onSelectSwitch={setMetric}/>
    </View>
  )
}

const styles = StyleSheet.create({
  headText: {
    height: 36,
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 30,
    lineHeight: 36,
    color: '#fff',
    paddingLeft: 10
  },
  select: {
    marginTop: Platform.OS === 'android' ? 30 : 0,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttons:{
    flexDirection: 'row',
    opacity:0.6,
    height: 50,
    width:200
  }
});

export default HeaderElement;
