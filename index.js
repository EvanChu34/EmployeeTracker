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
                viewAllEmployees();
            break;
            case "View All Employee's by roles":
                viewAllRoles();
            break;
            case "View All Employee's by departments":
                viewAllDepartments();
            break;
            case "Add Employee":
                addEmployee();
            case "Update Employee":
                updateEmployee();
            break;
            case "Add Role":
                addRole();
            break;
            case "Add Department":
                addDepartment();
            break;
        }
    })

}

function viewAllEmployees(){
    connection.query("SELECT employee.first_name, employee.last_name, role.title AS Title FROM employee JOIN role ON employee.role_id = role.id;", 
    function(err, res) {
    if (err) throw err
    console.table(res);
    startPrompt();
    })
}


function viewAllRoles(){
    connection.query("SELECT employee.first_name, employee.last_name, role.title AS Title FROM employee JOIN role ON employee.role_id = role.id;", 
    function(err, res) {
    if (err) throw err
    console.table(res)
    startPrompt()
    })
}


function viewAllDepartments(){
    connection.query("SELECT employee.first_name, employee.last_name, department.name AS Department FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id ORDER BY employee.id;", 
    function(err, res) {
      if (err) throw err
      console.table(res)
      startPrompt()
    })
}

function addEmployee(){

}

function updateEmployee(){

}

function addRole(){

}

function addDepartment(){

}

