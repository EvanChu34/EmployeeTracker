const inquirer = require("inquirer")
const mysql = require("mysql")
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "employee_trackerdb"
});

connection.connect(function(err) {
    if (err) throw err
    console.log("Connected as Id" + connection.threadId)
    startPrompt()
});

function startPrompt(){



}