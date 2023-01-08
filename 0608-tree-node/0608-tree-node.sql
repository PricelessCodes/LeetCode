# Write your MySQL query statement below
select id, case
            when p_id is null then 'Root'
            when id IN (select p_id from Tree)then 'Inner'
            else 'Leaf'
            end as type
 from Tree