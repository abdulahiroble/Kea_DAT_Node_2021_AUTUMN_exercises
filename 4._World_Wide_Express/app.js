const express = require('express');
const app = express();

app.use(express.static("public"));


app.get("/", (req, res) => {
    // this also works:
    // res.sendFile("index.html", { root: __dirname });
    res.sendFile(__dirname + "/public/frontpage/index.html");
});

app.get("/cleo", (req, res) => {
    res.sendFile(__dirname + "/public/cleo/cleo.html");
});

// create a new file called teenageroom.html
// serve /teenageroom 
// use dynamic client-side redirection to redirect after 3 seconds
app.get("/teenageroom", (req, res) => {
    res.sendFile(__dirname + "/public/teenageroom/teenageroom.html");
});


app.get("/creditor", (req, res) => {
    res.send({ message: "You are indebted and you won't get what you want." });
});

// redirect to creditor if I don't have 25 DKK on me
// figure out how to send data

app.get("/sausage", (req, res) => {
    if (Number(req.query.money) < 25) {
        res.redirect("/creditor");
    } else {
        res.send({ sausage: "Indianer is svøb" });
    }
});



// task allow the developer to set the port 
// task start-dev should run on port 8080
const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});
