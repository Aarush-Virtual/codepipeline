const express = require("express");
const app = express();
const port = 8000;
app.on("/" , (req, res) => {
    res.send("welcome to the main route");
});


app.listen(port , ()=> console.log("listening on port" , port));