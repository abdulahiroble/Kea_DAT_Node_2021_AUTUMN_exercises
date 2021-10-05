const express = require('express');
const app = express();

/* Beware that we can only do inline CSS and JS in the HTML files until next week */

app.get("/", (req, res) => {
    // this also works:
    // res.sendFile("index.html", { root: __dirname });
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/cleo", (req, res) => {
    res.sendFile(__dirname + "/public/cleo.html");
});

console.log(process.env.PORT)


app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});
