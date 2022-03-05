import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Switch, Image } from 'react-native';
import CitiesList from './components/CitiesList.js'
import CustomTouchableHL from './components/CustomTouchableHL.js'
import FooterElement from './components/FooterElement.js'

export default function App() {

const apiKey = '4ae0533e8b20642f34a93d1c3373089b'

const [weather, setWeather] = useState({
  city:"Москва",
  tempr:"0",
  wind:"5",
  pressure:"755",
  coord:{'lat':55,'lon':37},
  humidity:20,
  rain:50,
});

const getWeather = (coord) => {
  const {lat, lon} = coord ? coord : {'lat':55.761665,'lon':37.606667}
  fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=ru`)
    .then((resp) => resp.json())
    .then((data) => {
        setWeather({
          city:data.name,
          description: data.weather[0].description,
          tempr:Math.round(data.main.temp - 273.15),
          wind:data.wind.speed,
          pressure:data.main.pressure,
          coord:data.coord,
          humidity:data.main.humidity,
          rain:data.clouds.all,
        })
    })
    .catch((e) => {

      throw Error('Error connection!');
    });
}

const getGeoposition = () => {}

return (
    <View style={styles.content}>
      <View>
        <Text style={styles.headText}>{weather.city}</Text>
        <View style={styles.select}>
        <View style={styles.highlights}>
          <CustomTouchableHL title={'Сменить город'} onPress={() => {}}/>
          <CustomTouchableHL title={'Моё местоположение'} onPress={() => {}} icon={'location'}/>
          </View>
          <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
        // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
         ios_backgroundColor="#3e3e3e"
         //onValueChange={toggleSwitch}
        // value={isEnabled}
        />
       </View>
      </View>

      <View style={styles.tempr}>
        <Image style={styles.iconTempr} source={require(`./assets/img/sun.png`)}/>
        <Text style={styles.textTempr}>{weather.tempr}°</Text>
      </View>

      <View style={styles.footer}>
        <FooterElement title={'Ветер'} value={weather.wind}/>
        <FooterElement title={'Давление'} value={weather.pressure}/>
        <FooterElement title={'Влажность'} value={weather.humidity}/>
        <FooterElement title={'Вероятность дождя'} value={weather.rain}/>
      </View>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    fontFamily: 'Lato',
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#498CEC',
    padding: 50
  },
  headText: {
    //positon: 'absolute',
    height: 36,
    //left: '5.07%',
    //right: '74.93%',
    //top: 'calc(50% - 36px/2 - 296.5px)',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 30,
    lineHeight: 36,
    color: '#fff',
  },
  select: {
    flexDirection: 'row',
    opacity: 0.6,
    justifyContent: 'space-between'
  },
  highlights: {
    flexDirection: 'row',
  },
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
}
);
