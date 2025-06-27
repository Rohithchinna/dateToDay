const {parse,format} = require('date-fns');
const express=require('express');
const app=express();
const cors=require('cors');
const PORT=process.env.PORT || 3500;


//app.use(cors);
app.use(express.json());

app.get('/',(req,res)=>{
    try{
    const parsedDate=parse(req.body.date,"yyyy-MM-dd",new Date());
    if(isNaN(parsedDate)) return res.send({"message":"Enter correct date format"})
    res.send(JSON.stringify(format(parsedDate,"EEEE")));
}catch(err){
    res.send({"messege":"Cant format the date to day"});
}

})
app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));