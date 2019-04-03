const express = require('express');
const app = express();

app.use("/public",express.static(html&css));

app.get('/about',function(req,res)
{
    res.send("Hello World!");
});
app.listen(6969,function(err)
{

    if(err) console.log(err)
    else console.log("Sever start success!");
});