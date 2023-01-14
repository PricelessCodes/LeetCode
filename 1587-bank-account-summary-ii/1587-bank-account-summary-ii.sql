# Write your MySQL query statement below
select name, sum(amount) as balance
from Users join Transactions on Users.account = Transactions.account
group by name
having balance > 10000

/*
select t.name, t.balance
from (
    select name, sum(amount) as balance 
    from Users, Transactions 
    where Users.account = Transactions.account 
    group by name) as t
where t.balance > 10000
*/