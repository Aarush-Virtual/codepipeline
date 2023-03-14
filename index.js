require("dotenv").config();
const express = require("express");
const port = process.env.PORT;
const app = express();

app.on("/" , (req, res) => {
    res.send("welcome to the main route");
});


app.listen(port , ()=> console.log("listening on port " , port));