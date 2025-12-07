const router=require('express').Router();
const axios=require('axios');

router.get('/current',async(req,res)=>{
 try{
  const{city}=req.query;
  const r=await axios.get('https://api.example.com/weather',{params:{q:city}});
  res.json({city,temperature:r.data.temp});
 }catch(e){res.status(500).json({error:'Weather fetch failed'});}
});

module.exports=router;