DROP DATABASE IF EXISTS web_logistics;

CREATE DATABASE web_logistics;

CREATE TABLE customers (
	id				INT				AUTO_INCREMENT,
    firstname		VARCHAR(30)		NOT NULL,
    lastname		VARCHAR(30)		NOT NULL,
    email			VARCHAR(255)	NOT NULL,
    password		VARCHAR(255)	NOT NULL,
    phone_number	VARCHAR(10)		NOT NULL,
    location_id		INT				NOT NULL,
    PRIMARY KEY(id)
)ENGINE=InnoDB,CHARSET=UTF8;

CREATE TABLE staff (
	id				INT				AUTO_INCREMENT,
    firstname		VARCHAR(30)		NOT NULL,
    lastname		VARCHAR(30)		NOT NULL,
    email			VARCHAR(255)	NOT NULL,
    password		VARCHAR(255)	NOT NULL,
    phone_number	VARCHAR(10)		NOT NULL,
    PRIMARY KEY(id)
)ENGINE=InnoDB,CHARSET=UTF8;

CREATE TABLE packages (