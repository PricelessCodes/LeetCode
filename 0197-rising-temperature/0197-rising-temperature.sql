/* Write your T-SQL query statement below */
select distinct w2.id as "Id"
from Weather as w1 join Weather as w2 on DATEDIFF(day, w1.recordDate, w2.recordDate) = 1
where w1.temperature < w2.temperature