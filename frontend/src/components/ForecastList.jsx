import React from 'react';

export default function ForecastList({days}){
 if(!days||!days.length)return<p>No forecast.</p>;
 return(
  <ul>
   {days.map(d=>
    <li key={d.date}>{d.date}: {d.tempMin} - {d.tempMax} °C</li>
   )}
  </ul>
 );
}