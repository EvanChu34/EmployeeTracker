DROP DATABASE IF EXISTS employee_trackerdb;

CREATE DATABASE employee_trackerdb; 

USE employee_trackerdb;

CREATE TABLE department(
id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30)
);

CREATE TABLE role(
id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL, 
department_id INTEGER,
FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee(
id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY ,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INTEGER,
FOREIGN KEY (role_id) REFERENCES role(id)
);

INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Legal");


INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 40000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 45000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 73000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 60000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 70000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 73000, 3);


INSERT INTO employee (first_name, last_name,  role_id)
VALUE ("John","Cena", 1);
INSERT INTO employee (first_name, last_name, role_id)
VALUE ("John","Rambo", 2);
INSERT INTO employee (first_name, last_name, role_id)
VALUE ("John","Bon Jovi",  3);
INSERT INTO employee (first_name, last_name, role_id)
VALUE ("John","Wick",  4);


SELECT * FROM department; 
SELECT * FROM employee; 
SELECT * FROM role; 