CREATE DATABASE witter;
USE witter;
CREATE TABLE USER(USER_ID INT AUTO_INCREMENT PRIMARY KEY,NAME VARCHAR(20));
CREATE TABLE POST(POST_ID INT PRIMARY KEY,USER_ID INT,FOREIGN KEY(USER_ID) REFERENCES USER(USER_ID),DESCRIPTION VARCHAR(280),CREATED_AT DATETIME,PHOTOLINK VARCHAR(100),LIKES INT);
insert into USER (NAME) values ("max"),("ura"),("donik"),("gana"),("donik");
insert into POST (POST_ID,USER_ID,DESCRIPTION,CREATED_AT,PHOTOLINK,LIKES)
values
(1,1," hello ",'1000-03-01 00:00:00',"",2),	
(2,2," hjnfds ",'1020-03-01 00:00:00',"",3),
(3,1," asdjkas ",'1000-01-01 00:00:00',"",2),
(4,3," hjnfds ",'1020-01-01 00:00:00',"",3),
(5,1," asdjkas ",'1020-03-01 13:00:00',"",2),
(6,2," hjnfds ",'2020-05-25 00:00:00',"",3),
(7,3," hjnfds ",'1020-01-01 00:00:00',"",3),
(8,1," hello  asdjknasd as djw nd",'1030-01-01 00:01:00',"",2),
(9,2," hjnfds ",'2020-05-25 00:00:00',"",3),
(10,2," hjnfds ",'2020-05-25 00:10:00',"",3); 
SELECT * FROM user;
SELECT * FROM post;
