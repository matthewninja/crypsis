const express = require("express");
const app = express();
const Sequelize = require('sequelize');

const HTTP_PORT = process.env.PORT || 8080;

function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
}

app.get("/", (req, res) => {
    res.send("Hello World");
})

// set up sequelize to point to our postgres database
var sequelize = new Sequelize('imagesinfo', 'whaletoken', 'Va%c?6F,._RYfKD', {
    host: 'imagesinfo.c7iqp2uf8t3u.us-east-2.rds.amazonaws.com',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
        ssl: true
    }
});

// Define a "ImagesInfo" model
var ImagesInfo = sequelize.define('ImagesInfo', {
    imagesid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    timestamp: Sequelize.DATE,
    siteurl: Sequelize.STRING,
    imageurl: Sequelize.STRING,
    imgclass: Sequelize.STRING,
    change: Sequelize.BOOLEAN
});

// synchronize the Database with our models and automatically add the 
// table if it does not exist

sequelize.sync().then(function () {
    console.log("Database connected.")

    // // create a new "Project" and add it to the database
    // ImagesInfo.create({
    //     title: 'Project1',
    //     description: 'First Project'
    // }).then(function (project) {
    //     // you can now access the newly created Project via the variable project
    //     console.log("success!")
    // }).catch(function (error) {
    //     console.log("something went wrong!");
    // });
});

app.listen(HTTP_PORT, onHttpStart);
