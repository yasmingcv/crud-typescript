create database db_apits;
use db_apits;

create table users (
	id int auto_increment primary key,
    nome varchar(100),
    email varchar(255) not null,

    unique index(id)
);

create table post (
	id int auto_increment primary key,
    title varchar(99),
    content varchar(255),
    userId int,

	constraint FK_Post_User
    foreign key (userId)
    references users(id),

    unique index(id)
);