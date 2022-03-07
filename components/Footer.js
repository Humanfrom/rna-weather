import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import FooterElement from './FooterElement.js'

const Footer = ({weather}) =>  {
  return(
    Platform.OS === 'android' ?
    <View>
      <View style={styles.footer}>
        <FooterElement title={'Ветер'} value={weather.wind + ' м/с, ' + weather.windDirection}/>
        <FooterElement title={'Давление'} value={weather.pressure + ' мм рт. ст.'}/>
      </View>
      <View style={styles.footer}>
        <FooterElement title={'Влажность'} value={weather.humidity + '%'}/>
        <FooterElement title={'Вероятность дождя'} value={weather.rain + '%'}/>
      </View>
    </View>
    :
    <View style={styles.footer}>
        <FooterElement title={'Ветер'} value={weather.wind + ' м/с, ' + weather.windDirection}/>
        <FooterElement title={'Давление'} value={weather.pressure + ' мм рт. ст.'}/>
        <FooterElement title={'Влажность'} value={weather.humidity + '%'}/>
        <FooterElement title={'Вероятность дождя'} value={weather.rain + '%'}/>
    </View>
  )
}

const styles = StyleSheet.create({
    footer: {
      marginBottom: Platform.OS === 'android' ? 20 : 0,
      flexDirection: 'row',
      justifyContent: 'flex-start',
    }
});

export default Footer;
