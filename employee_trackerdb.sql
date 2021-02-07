DROP DATABASE IF EXISTS employee_trackerdb;

CREATE DATABASE employee_trackerdb; 

USE employee_trackerdb;

CREATE TABLE department(
id INTEGER AUTO_INCREMENT NOT NULL,
name VARCHAR(30) NOT NULL,
PRIMARY KEY(id)
);

CREATE TABLE role(
id INTEGER AUTO_INCREMENT NOT NULL,
title VARCHAR(30) NOT NULL,
salary DECIMAL NOT NULL, 
department_id INTEGER NOT NULL,
FOREIGN KEY (department_id) REFERENCES department(id),
PRIMARY KEY(id)
);

CREATE TABLE employee(
id INTEGER AUTO_INCREMENT NOT NULL,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INTEGER NOT NULL,
manager_id INTEGER NOT NULL,
FOREIGN KEY (manager_id) REFERENCES employee(id),
PRIMARY KEY(id)
);

SELECT * FROM department; 
SELECT * FROM employee; 
SELECT * FROM role; 

INSERT into department (name)
VALUES ("Sales");
INSERT into department (name)
VALUES ("Finance");
INSERT into department (name)
VALUES ("Engineering");
INSERT into department (name)
VALUES ("Legal");
INSERT into department (name)
VALUES ("Manager");


INSERT into role (title, salary, department_id)
VALUES ("Sales Lead", 40000, 1);
INSERT into role (title, salary, department_id)
VALUES ("Salesperson", 45000, 1);
INSERT into role (title, salary, department_id)
VALUES ("Lead Engineer", 73000, 2);
INSERT into role (title, salary, department_id)
VALUES ("Accountant", 60000, 3);
INSERT into role (title, salary, department_id)
VALUES ("Legal", 70000, 4);
INSERT into role (title, salary, department_id)
VALUES ("Manager", 85000, 5);


INSERT into employee(first_name, last_name, role_id)
VALUE ("John","Cena", 1);
INSERT into employee(first_name, last_name, role_id)
VALUE ("John","Rambo",2);
INSERT into employee(first_name, last_name, role_id)
VALUE ("John","Bon Jovi",3);
INSERT into employee(first_name, last_name, role_id)
VALUE ("John","Wrona",4);

