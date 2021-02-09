const inquirer = require("inquirer")
const mysql = require("mysql")
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Crossfitchuchu34!",
    database: "employee_trackerdb"
});

connection.connect(function(err) {
    if (err) throw err
    console.log("Connected as Id" + connection.threadId)
    startPrompt();
});

function startPrompt(){
    inquirer.prompt([
        {
            type:"list",
            message: "What would you like to do",
            name:"choice",
            choices:[
                "View All Employees?", 
                "View All Roles?",
                "View All Deparments", 
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
            case "View All Roles?":
                viewAllRoles();
            break;
            case "View All Employees By Departments":
                viewAllDepartments();
            break;
            case "Add Employee?":
                addEmployee();
            break;
            case "Update Employee":
                updateEmployee();
            break;
            case "Add Role?":
                addRole();
            break;
            case "Add Department?":
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
    connection.query("SELECT role.title AS Title FROM employee JOIN role ON employee.role_id = role.id;", 
    function(err, res) {
    if (err) throw err
    console.table(res)
    startPrompt()
    })
}

function viewAllDepartments(){
    connection.query("SELECT department.name AS Title FROM department ", 
    function(err, res) {
      if (err) throw err
      console.table(res)
      startPrompt()
    })
}

var roleArray = [];

function selectRole(){
    connection.query("SELECT * FROM role", function(err, res) {
        if (err) throw err
        for (var i = 0; i < res.length; i++) {
          roleArray.push(res[i].title);
        }
    })
    return roleArray;
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
            type: "rawlist",
            message:"What is the role?",
            choices: selectRole()
        }

    ]).then(function (val){
        var roleId = selectRole().indexOf(val.role) +1

        connection.query("INSERT INTO employee SET ?",
        {
            first_name: val.firstname,
            last_name: val.lastname,
            role_id: roleId
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
    connection.query("SELECT employee.last_name, role.title FROM employee JOIN role ON employee.role_id = role.id;", function(err, res) {
    inquirer
    .prompt([
        {
            name:"lastName",
            type:"rawlist",
            choices: function(){
                var lastName = [];
                for (var i = 0; i < res.length; i++) {
                  lastName.push(res[i].last_name);
                }
                return lastName;
            },
            message:"What is the employee's last name?",
        },
        {
            name:"role",
            type:"rawlist",
            message:"What is the new employees title?",
            choices:selectRole()
        }
    ]).then(function(val) {
        var roleId = selectRole().indexOf(val.role) +1
        connection.query("UPDATE employee SET WHERE ?", 
        {
            last_name: val.lastName
        },
        {
            role_id: roleId
        },
        function(err){
            if(err) throw err 
            console.table(val)
            startPrompt()
        })
    })
    })
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

