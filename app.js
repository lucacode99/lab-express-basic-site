const express   = require("express");
const app       = express();
const path      = require("path");
const expressLayouts = require("express-ejs-layouts"); 

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(expressLayouts);


app.get("/", (req, res, next) => res.render('home'));

app.get("/about", (req, res, next) => res.render('about'));

app.get("/works", (req, res, next) => res.render('works'));

app.listen(process.env.PORT || 3000, () => console.log('app available on http://localhost:3000'))

app.get("/", (req, res, next) => res.render("index"));