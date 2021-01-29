const express = require('express');
//const emailjob = require('./email');
const authentication = require("./middleware/authentication");
const emailjob = require("./middleware/email");

const app = express();
const PORT = 3000;
const avengers = require("./routes/avengers");
const home = require("./routes/home");

app.use(express.json()); //used a express inbuilt middleware to parse json
app.use(authentication);
app.use(emailjob);
app.use('/api/avengers', avengers);
app.use('/', home);


app.listen(PORT, () =>  {
    console.log("Started listning on port " + PORT);
});


