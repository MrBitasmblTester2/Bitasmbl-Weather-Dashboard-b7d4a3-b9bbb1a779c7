import React from 'react';

// TODO: integrate chart library (e.g., Chart.js)
export default function WeatherChart({forecast}){
 if(!forecast||!forecast.length)return null;
 // map forecast to chart-ready data here
 return(
  <section>
   <h3>Temperature Trend</h3>
   <div>Chart goes here</div>
  </section>
 );
}