import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Switch, Image, Platform} from 'react-native';
import { useFonts, Lato_400Regular} from "@expo-google-fonts/lato";

//custom components
import CitiesList from './components/CitiesList.js'
import CustomTouchableHL from './components/CustomTouchableHL.js'
import FooterElement from './components/FooterElement.js'
import TemperatureElement from './components/TemperatureElement.js'
import CustomSwitch from './components/CustomSwitch.js'

//app
export default function App() {

const apiKey = '4ae0533e8b20642f34a93d1c3373089b'

//hooks
const [celsius,setMetric] = useState(false);
const [weather, setWeather] = useState({
  city:"Москва",
  tempr:"-3",
  main: 'Rain',
  wind:4.46,
  pressure:765,
  description: 'ясно',
  coord:{'lat':55,'lon':37},
  humidity: 69,
  rain:99,
});

//get Google fonts
let [fontsLoaded] = useFonts({Lato_400Regular});

//get data with API
const getWeather = (coord) => {
  const {lat, lon} = coord ? coord : {'lat':51.666389,'lon':39.169998}
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
        console
    })
    .catch((e) => {

      throw Error('Error connection!');
    });
}

//getWeather()
//
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
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
}
);

const currentStyles = StyleSheet.create({
content: {
  fontFamily: 'Lato',
  flex: 1,
  justifyContent: 'space-between',
  backgroundColor: (weather.main === 'Clear') ? '#498CEC' : '#7290B9',
  padding: Platform.OS === 'android' ? 20 : 70
}})

const onSelectSwitch = index => {
   console.log('Selected index: ' + index);
 };

return (
    <View style={currentStyles.content}>
      <View>
        <Text style={styles.headText}>{weather.city}</Text>
        <View style={styles.select}>
        <View style={{flexDirection: 'row', opacity:0.6}}>
          <CustomTouchableHL title={'Сменить город'} onPress={() => {}}/>
          <CustomTouchableHL title={'Моё местоположение'} onPress={() => {}} icon={'location'}/>
        </View>
          <CustomSwitch
        selectionMode={2}
        roundCorner={false}
        option1={'Option1'}
        option2={'Option2'}
        onSelectSwitch={onSelectSwitch}
        selectionColor={'red'}
      />
       </View>
      </View>

      <TemperatureElement tempr={weather.tempr} icon={weather.main}/>

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
