<?php

    $servername = "localhost";
    $database = "formulario";
    $username = "root";
    $password = "";
    $port = 3306;  
    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $database);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    echo "Connected successfully";
    mysqli_close($conn);


    

?>