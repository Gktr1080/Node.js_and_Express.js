const express = require("express");
const https = require("https");
const app = express();

app.get("/", function (requests, responce) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=e72ca729af228beabd5d20e3b7749713&units=metric"
    https.get(url,function(response){
        console.log(response);
        response.on("data", function(data){
            console.log(data);
        })
    });
  responce.send("server is up and Running");
});

app.listen(3000, function (requests, responce) {
  console.log("server is running on port 3000");
});
