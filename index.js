const inquirer = require("inquirer")
const mysql = require("mysql")
const cTable = require('console.table');
const { type } = require("os");

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
    inquirer
    .prompt([
        {
            type:"list",
            message: "What would you like to do",
            name:"choice",
            choices:[
                "View All Employees?", 
                "View All Employee's By Roles?",
                "View all Emplyees By Deparments", 
                "Update Employee",
                "Add Employee?",
                "Add Role?",
                "Add Department?"
            ]
        }
    ]).then(function(val){
        switch (val.choice){
            case "View All Employees?":
                
        }
    })

}

function viewAllEmployees(){

}


function viewAllRoles(){
    
}


function viewAllDepartments(){
    
}

function addEmployee(){

}

function updateEmployee(){

}

function addRole(){

}

function addDepartment(){

}

