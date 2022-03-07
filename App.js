import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Switch, Image, Platform, Modal, Pressable, TextInput, Alert} from 'react-native';
import Geolocation from 'react-native-geolocation-service'
import { useFonts } from 'expo-font';

//custom components and functions
import CitiesList from './components/CitiesList.js'
import Footer from './components/Footer.js'
import TemperatureElement from './components/TemperatureElement.js'
import CustomModal from './components/UI/Modal/CustomModal.js'
import { directionToWord } from './components/AdditionFunctions.js'
import HeaderElement from './components/HeaderElement.js'

//app
export default function App() {

//api
const keyAPI = '4ae0533e8b20642f34a93d1c3373089b'

//load font Lato
let [fontsLoaded] = useFonts({'Lato': require('./assets/fonts/Lato-Regular.ttf')});

//hooks
const [farenheit,setMetric] = useState(0);
const [modal, setModal] = useState({visible:false,title:'Москва'});
const [weather, setWeather] = useState({
  city:"Москва",
  tempr: 275,
  main: 'Rain',
  wind: 4.46,
  windDirection: 'западный',
  pressure:765,
  description: 'ясно',
  coord:{'lat':55,'lon':37},
  humidity: 69,
  rain:99,
});

//get data with API
const getWeather = ({coord}) => {
  const {lat, lon} = coord || {'lat':55.761665,'lon':37.606667}
  fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${keyAPI}&lang=ru`)
    .then((resp) => resp.json())
    .then((data) => {
        setWeather({
          city:data.name,
          tempr:data.main.temp,
          main: data.weather[0].main,
          description: data.weather[0].description,
          wind:data.wind.speed,
          windDirection: directionToWord(45),
          pressure: Math.round(data.main.pressure * 0.75),
          coord:data.coord,
          humidity:data.main.humidity,
          rain:data.clouds.all,
        })
        console.log(data)
    })
    .catch((e) => {
      Alert.alert(
        "Ошибка",
        "Не удалось получить данные с сервера",
        [{ text: "OK", onPress: () => console.log("OK GetWeather") }]
      );
    });
}

const getGeo = () => {
  try{
  Geolocation.getCurrentPosition((position) => {
      getWeather({coord: {'lat':position.coords.latitude,'lon':position.coords.longitude}})
  }, (error) => {
      // См. таблицы кодов ошибок выше.
      console.log(error.code, error.message);
  }, {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 10000
  });} catch(e){
    Alert.alert(
      "Ошибка",
      "Не удалось установить Ваше местоположение",
      [{ text: "OK", onPress: () => console.log("OK Geolocation") }]
    );
  }
}

const selectCity = (city) => {
  if (city in CitiesList) {getWeather({coord: {'lat':CitiesList[city].lat,'lon':CitiesList[city].lon}})}
}

useEffect(() => {
  getWeather({})
}, []);

return (
  (!fontsLoaded)
  ?
  <View style={{flex: 1, justifyContent: 'center', alignItems: "center"}}><Text>...</Text></View>
  :
    <View style={[styles.content,{backgroundColor: (weather.main === 'Clear') ? '#498CEC' : '#7290B9'}]}>
      <StatusBar style="light" animated={true}/>

      <CustomModal
        modal={modal}
        setModal={setModal}
        selectCity={selectCity}
      />

      <HeaderElement
        onPressCity={() => setModal({...modal, visible:true})}
        onPressGeo={getGeo}
        city={weather.city}
        farenheit={farenheit}
        setMetric={setMetric}
      />

      <TemperatureElement
        tempr={farenheit ? Math.round(1.8 * (weather.tempr - 273) + 32) : Math.round(weather.tempr - 273.15)}
        icon={weather.main}
        title={weather.description}
      />

      <Footer weather={weather}/>
    </View>
  );
}

//
const styles = StyleSheet.create({
content: {
  fontFamily: 'Lato',
  flex: 1,
  justifyContent: 'space-between',
  padding: Platform.OS === 'android' ? 20 : 70
}})
