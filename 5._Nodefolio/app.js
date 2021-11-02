const express = require("express");
const app = express();

app.use(express.static("public"));

/* Import and use routes */
const projectsRouter = require("./routers/projects.js");
app.use(projectsRouter.router);

/* Read the HTML files */
const fs = require("fs");
const nav = fs.readFileSync("./public/components/nav/nav.html", "utf8");
const footer = fs.readFileSync("./public/components/footer/footer.html", "utf8");

const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html", "utf8");
const projects = fs.readFileSync("./public/pages/projects/projects.html", "utf8");

/* Ready the pages */
const frontpagePage = nav + frontpage + footer;
const projectsPage = nav + projects + footer;

app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/projects", (req, res) => {
    res.send(projectsPage);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
    console.log("Server is running on", PORT);
});
