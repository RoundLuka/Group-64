--select * from Employees
--where managerId is not null;

--select Model, Count(*) from Cars
--group by Model

--select ManagerId, SUM(Salary) as Total_Budget From Employees
--where ManagerId is not null
--group by ManagerId having SUM(SALARY) > 1000
--order by SUM(Salary) asc

--select ManagerId, SUM(Salary) as Total_Budget from Employees
--where ManagerId is not null
--group by ManagerId having SUM(SALARY) > 1000
--order by SUM(SALARY) asc

--select * from Employees

--select FName, Salary, 
--	CASE
--		WHEN SALARY > 900 THEN 'High'
--		WHEN SALARY > 500 THEN 'MEDIUM'
--		ELSE 'LOW'
--	END as Salary_Level
--from Employees

select FName, Salary, 
	CASE
		WHEN SALARY > 900 THEN 'HIGH'
		WHEN SALARY > 500 THEN 'MEDIUM'
		ELSE 'LOW'
	END as Salary_Level,
from Employees

--select CONCAT(FName, ' ' ,LName) as Full_Name from Employees

--select CONCAT(SUBSTRING(FNAME, 1, 1), '.', FName) from Employees