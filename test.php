<?php function connection(){ 
    return mysqli_connect("localhost", "root","","saparkultoktanlab3");
 } 
 if(isset($_GET['username'])){ 
     $mysql=connection(); 
     $statement = $mysql->prepare("insert into user(name,number) values(?,?)"); 
     $statement->bind_param("si",$_GET['user'],$_GET['number']); 
     $statement->execute(); echo $_GET['username']." ".$_GET['number']; 
     } 
?>