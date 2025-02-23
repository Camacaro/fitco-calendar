
create database calendar;

create table calendar.users (
    uuid char(36) primary key not null,
    username varchar(255) not null,
    email varchar(255) not null,
    password text not null
);

CREATE TABLE calendar.events (
     uuid char(36) primary key not null,
     title VARCHAR(255) NOT NULL,
     notes TEXT,
     start_date DATETIME NOT NULL,
     end_date DATETIME NOT NULL,
     user_id char(36) not null
);
