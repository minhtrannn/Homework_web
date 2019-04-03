const express = require('express');
const app = express();

// app.use("/public",express.static(html&css));

app.get('/',function(req,res)
{
    res.sendFile(__dirname + "/html&css/index.html");
});

app.get('/web13',function(req,res)
{
    res.sendFile(__dirname + "/web13.json");
});

app.get('/web14',function(req,res)
{
    res.sendFile(__dirname + "/web14.json");
});

app.get('/web15',function(req,res)
{
    res.sendFile(__dirname + "/web15.json");
});

app.get('/web16',function(req,res)
{
    res.sendFile(__dirname + "/web16.json");
});

app.get('/web17',function(req,res)
{
    res.sendFile(__dirname + "/web17.json");
});

app.get('/web18',function(req,res)
{
    res.sendFile(__dirname + "/web18.json");
});

app.get('/web19',function(req,res)
{
    res.sendFile(__dirname + "/web19.json");
});

app.get('/web20',function(req,res)
{
    res.sendFile(__dirname + "/web20.json");
});

app.listen(6969,function(err)
{

    if(err) console.log(err)
    else console.log("Sever start success!");
});