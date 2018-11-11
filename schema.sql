-- ****************** SqlDBM: MySQL ******************;
-- ***************************************************;
USE usysutc9ey5bm5dx;

-- ************************************** `users`
-- DROP TABLE IF EXISTS `templates`;
-- DROP TABLE IF EXISTS `projects`;
-- DROP TABLE IF EXISTS `portfolios`;
-- DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`
(
 `id`          integer NOT NULL AUTO_INCREMENT ,
 `username`    varchar(45) NOT NULL ,
 `email`       varchar(45) NOT NULL ,
 `pw`          varchar(45) NOT NULL ,
 `userimage`   varchar(500) ,
 `preferences` json NOT NULL ,
 `location`    varchar(100) ,
 `createdAt`   TIMESTAMP NOT NULL,

PRIMARY KEY (`id`)
);






-- ************************************** `templates`

CREATE TABLE `templates`
(
 `id`            integer NOT NULL AUTO_INCREMENT ,
 `description`   varchar(5000) NOT NULL ,
 `defaultconfig` json NOT NULL ,
 `createdAt`   TIMESTAMP NOT NULL,

PRIMARY KEY (`id`)
);






-- ************************************** `portfolios`

CREATE TABLE `portfolios`
(
 `id`           integer NOT NULL AUTO_INCREMENT,
 `technologies` integer NOT NULL ,
 `description`  varchar(5000) NOT NULL ,
 `usersid`      integer NOT NULL ,
 `config`       json NOT NULL ,
 `name`         varchar(20) NOT NULL ,
 `createdAt`   TIMESTAMP NOT NULL,

PRIMARY KEY (`id`),
KEY `fkIdx_15` (`usersid`),
CONSTRAINT `FK_15` FOREIGN KEY `fkIdx_15` (`usersid`) REFERENCES `users` (`id`)
);






-- ************************************** `projects`

CREATE TABLE `projects`
(
 `id`          integer NOT NULL AUTO_INCREMENT ,
 `imageurl`    varchar(500) NOT NULL ,
 `githuburl`   varchar(500) NOT NULL ,
 `description` varchar(5000) NOT NULL ,
 `usersid`     integer NOT NULL ,
 `portfolioid` integer NOT NULL ,
 `createdAt`   TIMESTAMP NOT NULL ,
PRIMARY KEY (`id`),
KEY `fkIdx_25` (`usersid`),
CONSTRAINT `FK_25` FOREIGN KEY `fkIdx_25` (`usersid`) REFERENCES `users` (`id`),
KEY `fkIdx_28` (`portfolioid`),
CONSTRAINT `FK_28` FOREIGN KEY `fkIdx_28` (`portfolioid`) REFERENCES `portfolios` (`id`)
);





