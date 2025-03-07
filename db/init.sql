
create database if not exists calendar;

create table if not exists calendar.users (
    uuid char(36) primary key not null,
    username varchar(255) not null,
    email varchar(255) not null,
    password text not null
);

CREATE TABLE if not exists calendar.events (
     uuid char(36) primary key not null,
     title VARCHAR(255) NOT NULL,
     notes TEXT,
     start_date DATETIME NOT NULL,
     end_date DATETIME NOT NULL,
     user_id char(36) not null
);
