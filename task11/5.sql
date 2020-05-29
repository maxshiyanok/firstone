SELECT USER.USER_ID, NAME from USER 
join POST on POST.USER_ID = USER.USER_ID 
GROUP BY POST.USER_ID having count(*) > 3; 