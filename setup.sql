CREATE USER IF not EXISTS 'temp'@'localhost';
CREATE DATABASE IF NOT EXISTS totest;
use totest;
CREATE TABLE IF NOT EXISTS task(
	id INT PRIMARY KEY AUTO_INCREMENT,
    title varchar(300) not null,
    maketime time DEFAULT CURRENT_TIME()
);
GRANT SELECT,INSERT,UPDATE,DELETE on totest.* to temp@localhost;