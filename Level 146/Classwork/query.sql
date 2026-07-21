-- Create your SELECT statement here
select p.id, p.name, count(t.people_id) as toy_count 
from people p join toys t
on p.id = t.people_id
group by p.id;