# Write your MySQL query statementotal_time  below
select user_id, max(time_stamp) as last_stamp
from Logins
where year(time_stamp) = 2020
group by user_id
order by user_id, time_stamp desc 
