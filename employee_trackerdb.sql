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

INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Legal");
INSERT INTO department (name)
VALUES ("Manager");


INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 40000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 45000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 73000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 60000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Legal", 70000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 85000, 5);


INSERT INTO employee (first_name, last_name, manger_id, role_id)
VALUE ("John","Cena", null, 1);
INSERT INTO employee (first_name, last_name, manger_id, role_id)
VALUE ("John","Rambo", 1, 2);
INSERT INTO employee (first_name, last_name, manger_id, role_id)
VALUE ("John","Bon Jovi", null,3);
INSERT INTO employee (first_name, last_name, manger_id, role_id)
VALUE ("John","Wrona", 2, 4);

