DROP DATABASE if exists burgers_db; 
CREATE DATABASE burgers_db;

use burgers_db;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
    burgers varchar(280) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
)