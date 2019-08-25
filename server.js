const express = require("express");
const app = express();
const mysql = require('mysql');
const bodyParser = require("body-parser");
const clientSessions = require("client-sessions");
const path = require("path");
const exphbs = require('express-handlebars');
// const bcrypt = require('bcryptjs');

app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');

const HTTP_PORT = process.env.PORT || 8080;
app.use(express.static("./"));

function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

app.get("/forgot", (req, res) => {
  res.render("forgot");
});

app.use(clientSessions({
  cookieName: "session",
  secret: "mynamejeffandilikepeanutbutter!@#$Y^%$#@!", 
  duration: 2 * 60 * 1000, 
  activeDuration: 1000 * 60
}));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

const user = {
  username: "admin@mynamejeff.com",
  password: "helloworld",
};

var connection = mysql.createConnection({
  host     : "crypsisapi.c7iqp2uf8t3u.us-east-2.rds.amazonaws.com",
  user     : "admin",
  password : "ajklsdfhajksdhf",
  port     : 3306
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});

app.get("/", (req, res) => {
  res.redirect("/login");
});

app.get("/login", function(req, res) {
  res.render("login", { });
});

// app.post("/addUser", (req, res) => {
//   let reqData = req.body;
//   // Encrypt the plain text: "myPassword123"
//   bcrypt.genSalt(10, function(err, salt) { // Generate a "salt" using 10 rounds
//     bcrypt.hash("myPassword123", salt, function(err, hash) { // encrypt the password: "myPassword123"
//         // TODO: Store the resulting "hash" value in the DB
//         var sql = "INSERT INTO userinfo (email, password) values (" + email + ", " + hash + ")";
//         connection.query(sql, function (err, result) {
//           if (err) throw err;
//           console.log("User inserted");
//         });
//     });
//   });
// });

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if(username === "" || password === "") {
    // Render 'missing credentials'
    return res.render("login", { errorMsg: "Missing credentials." });
  }

  if(username === user.username && password === user.password){
    // Add the user on the session and redirect them to the dashboard page.
    req.session.user = {
      username: user.username,
      email: user.email
    };
    res.redirect("/dashboard");
  } 
  else {
    res.render("login", { errorMsg: "Invalid username or password!"});
  }
});

app.get("/logout", function(req, res) {
  req.session.reset();
  res.redirect("/");
});

function ensureLogin(req, res, next) {
  if (!req.session.user) {
    res.redirect("/login");
  } else {
    next();
  }
}

app.get("/dashboard", ensureLogin, (req, res) => {
  res.render("dashboard", {user: req.session.user});
});



app.use((req, res) => {
  res.status(404).redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
});

app.listen(HTTP_PORT, onHttpStart);



// // set up sequelize to point to our postgres database
// var sequelize = new Sequelize('aa1s08dm028ff8j', 'whaletoken', 'v', {
//     host: 'aa1s08dm028ff8j.c7iqp2uf8t3u.us-east-2.rds.amazonaws.com',
//     dialect: 'postgres',
//     port: 5432,
//     dialectOptions: {
//         ssl: false
//     }
// });

// // Define a "ImagesInfo" model
// var ImagesInfo = sequelize.define('ImagesInfo', {
//     imagesid: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     timestamp: Sequelize.DATE,
//     siteurl: Sequelize.STRING,
//     imageurl: Sequelize.STRING,
//     imgclass: Sequelize.STRING,
//     change: Sequelize.BOOLEAN
// });

// var UserInfo = sequelize.define('ImagesInfo', {
//     userid: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     email: Sequelize.STRING,
//     password: Sequelize.STRING,
// });

// // synchronize the Database with our models and automatically add the 
// // table if it does not exist
// app.get("/", (req, res) => {
//     sequelize.sync().then(function () {
//         console.log("Database connected.")
    
//         // create a new "Project" and add it to the database
//         UserInfo.create({
//             title: 'Users',
//             description: 'mynamejeff'
//         }).then(function (project) {
//             // you can now access the newly created Project via the variable project
//             console.log("success!")
//         }).catch(function (error) {
//             console.log("something went wrong!");
//         });
//         res.send("Hello World");
//     });
// });


// app.post("/addUser", (req, res) => {

// });

