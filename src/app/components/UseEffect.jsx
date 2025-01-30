'use client';

import { useState } from "react";

export default function UseEffect(){
    const api = `7941f98817979b9cf7a72d18f4d31279`;
    const [city, setCity] = useState('Paris');
    const [weather, setWeather] = useState('');

    function getCity(event){
        console.log('city',event.target.value);
        let selectedCity = event.target.value;
        setCity(selectedCity);
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${selectedCity}&limit=1&appid=${api}`)
        .then(res => {
          console.log('HTTP Status:', res.status);
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}, Message: ${res.statusText}`);
          }
          return res.json();
        })
        .then(data => {
          console.log('API Response:', data);
          let lat = data[0].lat;
          let lon = data[0].lon;
          console.log(lat,lon);
          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`)
            .then(res => res.json())
            .then(data => {
               console.log("data:",data.weather[0].description);
               setWeather(data.weather[0].description);
            })
        })
        .catch(error => {
          console.error('Fetch Error:', error.message);
        });
        
    }

return (
    <>
      <h1>Select City</h1>
      <select name="cities" value={city} onChange={getCity} className="text-black">
        <option id="london" value="London">London</option>
        <option id="paris" value="Paris">Paris</option>
        <option id="newYork" value="New York">New York</option>
      </select>
      <h2 className="text-2xl">Weather: {weather}</h2>
    </>
)}