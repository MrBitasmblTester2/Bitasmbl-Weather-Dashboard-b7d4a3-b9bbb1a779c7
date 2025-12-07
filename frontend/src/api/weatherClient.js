const BASE='/api/weather';

export async function getCurrent(city){
 const res=await fetch(`${BASE}/current?city=${encodeURIComponent(city)}`);
 if(!res.ok)throw new Error('Failed');
 return res.json();
}