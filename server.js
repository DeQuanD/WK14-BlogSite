const express = require('express');

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
//app.set("views", "/.views");

app.use(require('./controllers/home-route'));

app.listen(PORT, () => console.log(`Now Listening on ${PORT}`))