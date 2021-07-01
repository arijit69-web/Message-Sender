const express = require('express');
const app=express();
  app.use(express.urlencoded({ extended: false }));

require('dotenv').config()

app.set('view engine','ejs')

const fast2sms = require('fast-two-sms')



app.post('/',async  (req,res)=>{
    try{
  const data= await  fast2sms.sendMessage(  {authorization : process.env.API_KEY , message : req.body.message ,  numbers : [req.body.number]} )
    
  res.send(`<script>alert("✅Message Sent Successfully✅"); window.location.href = "/"; </script>`);
}catch(err)
    {
        res.send(`<script>alert("⚠️Message Not Sent Successfully!!"); window.location.href = "/"; </script>`);

    }
})
app.get('/',(req,res)=>{
    res.render("index.ejs")
})

app.listen(80,()=>{
    console.log("App is listening @ port 80")
})