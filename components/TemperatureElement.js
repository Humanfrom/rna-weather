import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts, Lato_400Regular} from "@expo-google-fonts/lato";

const TemperatureElement = ({tempr,icon}) =>  {

  let [fontsLoaded] = useFonts({Lato_400Regular});

  let img = 'sun';

  switch (icon) {
    case 'Clear':
    img = 'sun'
    break;
    case 'Partly Cloudy':
    img = 'partlyCloudy'
    break;
    case 'Rain':
    img = 'rain'
    break;
    case 'Clouds':
    img = 'storm'
    break;
    img = 'cloud'
  }

  const styles = StyleSheet.create({
    tempr: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    iconTempr: {
      width: 200,
      height: 200,
    },
    textTempr: {
      marginTop: 5,
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 170,
      lineHeight: 170,
      textAlign: 'center',
      color: '#fff',
    },
  });

  return(
    <View style={styles.tempr}>
      <Image style={styles.iconTempr} source={require(`../assets/img/cloud.png`)}/>
      <Text style={styles.textTempr}>{tempr}°</Text>
    </View>
  )
}

export default TemperatureElement;
