import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import CitiesList from './components/CitiesList.js'
import CustomTouchableHL from './components/CustomTouchableHL.js'

export default function App() {

const [weather, setWeather] = useState({
  city:"Выберете город",
  tempr:"-",
  wind:"-",
  pressure:"-",
  coord:{'lat':55,'lon':37},
  humidity:0,
  rain:"-",
});

const getWeather = () => {
  fetch('http://api.openweathermap.org/data/2.5/weather?lat=55.761665&lon=37.606667&appid=4ae0533e8b20642f34a93d1c3373089b&lang=ru')
    .then((resp) => {
      return resp.json()
      })
    .then((data) => {
        setWeather({
          city:data.name,
          description: data.weather[0].description,
          tempr:Math.round(data.main.temp),
          wind:data.wind.speed,
          pressure:data.main.pressure,
          coord:data.coord,
          humidity:data.main.humidity,
          rain:data.clouds.all,
        })
    })
    .catch((e) => {
    });
}

return (
    <View style={styles.container}>
      <Text>{weather.city}</Text>
      <CustomTouchableHL title={'Сменить город'} onPress={() => {}}/>
      <CustomTouchableHL title={'Моё местоположение'} onPress={() => {}} icon={'location'}/>
      <Switch
       trackColor={{ false: "#767577", true: "#81b0ff" }}
      // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
       ios_backgroundColor="#3e3e3e"
       //onValueChange={toggleSwitch}
      // value={isEnabled}
     />

      <Text>Температура: {weather.tempr} С</Text>
      <Text>Скорость ветра: {weather.wind} м/с</Text>
      <Text>Давление: {weather.pressure}</Text>
      <Text>Влажность: {weather.humidity}</Text>
      <Text>Дождь: {weather.rain}</Text>
      <StatusBar style="auto" />


      <Button
        title="UPDATE"
        onPress={() => getWeather()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Lato',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }}
);
