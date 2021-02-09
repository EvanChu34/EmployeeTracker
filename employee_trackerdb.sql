DROP DATABASE IF EXISTS employee_trackerdb;

CREATE DATABASE employee_trackerdb; 

USE employee_trackerdb;

CREATE TABLE department(
id INTEGER NOT NULL AUTO_INCREMENT ,
name VARCHAR(30) NOT NULL,
PRIMARY KEY(id)
);

CREATE TABLE role(
id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30) NOT NULL,
salary DECIMAL NOT NULL, 
department_id INTEGER NOT NULL,
FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee(
id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY ,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INTEGER NOT NULL,
manager_id INTEGER NOT NULL,
FOREIGN KEY (role_id) REFERENCES role(id),
FOREIGN KEY (manager_id) REFERENCES employee(id)
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
VALUES ("software Engineer", 73000, 3);


INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("John","Cena", 1, 1);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("John","Rambo", 2, 2);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("John","Bon Jovi", 3, 3);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("John","Wick", 4, 4);


SELECT * FROM department; 
SELECT * FROM employee; 
SELECT * FROM role; 