import React,{useState}from 'react';

export default function CitySearch({city,onCityChange}){
 const[input,setInput]=useState(city);
 const submit=e=>{e.preventDefault();onCityChange(input.trim());};
 return(
  <form onSubmit={submit}>
   <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter city"/>
   <button type="submit">Search</button>
  </form>
 );
}