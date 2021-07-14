CREATE DATABASE dockerdb;
\c dockerdb;
CREATE TABLE users ( 
  id SERIAL PRIMARY KEY, 
  username varchar(255) UNIQUE, 
  password varchar(255)
  );