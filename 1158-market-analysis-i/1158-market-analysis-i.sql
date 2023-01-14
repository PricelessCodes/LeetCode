# Write your MySQL query statement below
select u.user_id as buyer_id, u.join_date, ifnull(count(o.order_date),0) as orders_in_2019
from Users as u left join Orders as o on u.user_id = o.buyer_id and year(o.order_date) = 2019
left join Items as i on o.item_id = i.item_id
group by u.user_id