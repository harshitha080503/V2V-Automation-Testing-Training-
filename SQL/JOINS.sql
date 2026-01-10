create table empinfor(empl_id INT PRIMARY KEY,empl_name VARCHAR(100),pid_id INT);         
create table perinfor(pid_id INT PRIMARY KEY,pid_name VARCHAR(100) NOT NULL);           

insert into empinfor(empl_id,empl_name,pid_id) values(1,'ajay',10);                       
insert into empinfor(empl_id,empl_name,pid_id) values(2,'amit',20);
insert into empinfor(empl_id,empl_name,pid_id) values(3,'akash',30);
insert into empinfor(empl_id,empl_name,pid_id) values(4,'aman',null);

insert into perinfor(pid_id,pid_name) values(10,'HR');                                    
insert into perinfor(pid_id,pid_name) values(20,'Admin');
insert into perinfor(pid_id,pid_name) values(30,'dev');
insert into perinfor(pid_id,pid_name) values(40,'HR');

select * from  empinfor;
select * from perinfor;

SELECT e.empl_name,p.pid_name FROM empinfor e INNER JOIN perinfor p ON e.pid_id=p.pid_id;  
SELECT e.empl_name,p.pid_name FROM empinfor e LEFT JOIN perinfor p ON e.pid_id=p.pid_id;   
SELECT e.empl_name,p.pid_name FROM empinfor e RIGHT JOIN perinfor p ON e.pid_id=p.pid_id;  