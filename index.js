const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const PORT = 5000;
const members = require('./Members');

//middleware
const logger = require('./middleware/logger');
// app.use(logger);

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

//Handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('index', {title: 'Members App', members});
});

//Body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Set a static folder
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/members'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))