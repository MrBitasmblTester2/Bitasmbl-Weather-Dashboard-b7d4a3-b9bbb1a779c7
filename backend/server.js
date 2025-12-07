const express=require('express');
const weatherRouter=require('./routes/weather');
const app=express();
app.use(express.json());
app.use('/api/weather',weatherRouter);
const port=process.env.PORT||4000;
app.listen(port,()=>console.log(`API on ${port}`));