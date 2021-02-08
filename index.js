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

var roleArray = [];
var managerArray = [];
function selectRole(){
    connection.query("SELECT * FROM role", function(err, res) {
        if (err) throw err
        for (var i = 0; i < res.length; i++) {
          roleArr.push(res[i].title);
        }
    })
    return roleArr;
}

function selectManager(){
    connection.query("SELECT first_name, last_name FROM employee WHERE manager_id IS NULL", function(err, res) {
        if (err) throw err
        for (var i = 0; i < res.length; i++) {
          managersArr.push(res[i].first_name);
        }
    })
    return managersArr;
}


function addEmployee(){
    inquirer
    .prompt([
        {
            name:"firstname",
            type: "input",
            message:"Please enter the first name",
        },
        {
            name:"lastname",
            type: "input",
            message:"Please enter the last name",
        },
        {
            name:"role",
            type: "list",
            message:"What is the role?",
            choices: selectRole()
        },
        {
            name:"choice",
            type: "rawlist",
            message:"Select your manager",
            choices: selectManager()
        },
        {
            name:"",
            type: "input",
            message:"",
        }
    ]).then(function (val){
        var roleID = selectRole().indexOf(val.role) +1
        var managerID = selectManager().indexOf(val.choice) +1
        connection.query("INSERT INTO employee SET ?",
        {
            first_name: val.firstname,
            last_name: val.lastname,
            manager_id: managerID,
            role_id: roleID
        },
            function(err){
                if(err) throw err
                console.table(val)
                startPrompt()
            }
        )
    })
}

function updateEmployee(){

}

function addRole(){
    connection.query("SELECT role.title AS Title, role.salary AS Salary FROM role", function(err, res) {
        inquirer.prompt([
            {
                name:"Title",
                type:"input",
                message:"What is the title of the role?"
            },
            {
                name:"Salary",
                type:"input",
                message: "What is the salary?"
            }
        ]).then(function(res){
            connection.query(
                "INSERT INTO role SET ?",
                {
                    title: res.Title,
                    salary: res.Salary
                },
                function(err){
                    if(err) throw err
                    console.table(res);
                    startPrompt();
                }
            )
        })
    })
}

function addDepartment(){
    inquirer
    .prompt([
        {
            name:"name",
            type:"input",
            message:"What department do you want to add?"
        }
    ]).then(function(res){
        var query = connection.query("INSERT INTO department SET ?",
        {
            name:res.name
        },
        function(err){
            if(err) throw err
            console.table(res);
            startPrompt()
        }
        )
    })
}

