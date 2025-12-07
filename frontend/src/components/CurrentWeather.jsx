import React,{useEffect,useState}from 'react';
import {getCurrent}from '../api/weatherClient';

export default function CurrentWeather({city}){
 const[data,setData]=useState();
 const[err,setErr]=useState();
 useEffect(()=>{
  setData();setErr();
  getCurrent(city).then(setData).catch(e=>setErr(e.message));
 },[city]);
 if(err)return<p>{err}</p>;
 if(!data)return<p>Loading...</p>;
 return<div>
  <h2>{data.city}</h2>
  <p>{data.temperature} °C</p>
 </div>;
}