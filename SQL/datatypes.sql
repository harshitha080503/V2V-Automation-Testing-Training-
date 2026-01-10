
create table student(id INT PRIMARY KEY,name VARCHAR(100),email VARCHAR(100),admissiondate DATE,cgpa DECIMAL(8,1),IsActive BOOLEAN,starttime TIME);
insert into student(id,name,email,admissiondate,cgpa,IsActive,starttime) values(1,'raju','r@gmail','2000-01-01',7.8,TRUE,'08:08:14');
insert into student(id,name,email,admissiondate,cgpa,IsActive,starttime) values(2,'ramu','ramu@gmail','2000-01-02',7.9,FALSE,'08:08:14');
insert into student(id,name,email,admissiondate,cgpa,IsActive,starttime) values(3,'lilly','l@gmail','2000-03-01',7.8,TRUE,'08:08:14');
insert into student(id,name,email,admissiondate,cgpa,IsActive,starttime) values(4,'jessy','jessy@gmail','2000-05-02',7.9,FALSE,'08:08:14');
insert into student(id,name,email,admissiondate,cgpa,IsActive,starttime) values(5,'dolly','dolly@gmail','2000-08-01',7.8,TRUE,'08:08:14');
insert into student(id,name,email,admissiondate,cgpa,IsActive,starttime) values(6,'honey','honey@gmail','2000-05-02',7.9,TRUE,'08:08:14');

select * from student;

DROP TABLE student;

