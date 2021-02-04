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
PRIMARY KEY(id)
);

CREATE TABLE employee(
id INTEGER AUTO_INCREMENT NOT NULL,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INTEGER NOT NULL,
manager_id INTEGER NOT NULL,

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
VALUES ("Executive");

INSERT into employee(first_name, last_name, role_id)
VALUE ();
INSERT into employee(first_name, last_name, role_id)
VALUE ();
INSERT into employee(first_name, last_name, role_id)
VALUE ();
INSERT into employee(first_name, last_name, role_id)
VALUE ();

