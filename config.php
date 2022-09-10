<?php

    // $conn=mysqli_connect("localhost","root","","chatbot");
    //     echo("seccussifully connnected"); //or die("could'nt connect to database");

    $host="127.0.0.1";
    $user = "root@localhost";
    $password='';
    $db_name="chatbot";

    $conn = mysqli_connect($host,$user,'','dept');
    if(mysqli_connect_errno()){
        die("Failed to connect".mysqli_connect_errno());
    }

?>