# Write your MySQL query statement in () below
select SalesPerson.name
from SalesPerson 
where SalesPerson.sales_id not in (
    select Orders.sales_id 
    from Orders, Company 
    where Company.com_id = Orders.com_id && Company.name = "RED")
