import React,{useState}from 'react';
import CitySearch from './components/CitySearch';

export default function App(){
 const[city,setCity]=useState('New York');
 return(
  <div>
   <h1>Weather Dashboard</h1>
   <CitySearch city={city} onCityChange={setCity}/>
   <main id="content"/>
  </div>
 );
}