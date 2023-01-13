# Write your MySQL query statement below
select w2.id
from Weather as w1 join Weather as w2
where w1.temperature < w2.temperature &&  TO_DAYS(w2.recordDate)-TO_DAYS(w1.recordDate)=1;