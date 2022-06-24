<?php
    $servidor= 'localhost';
    $user = 'root';
    $password = '';
    $dbName = 'formulario';
    $port = 3306;
    
    
    try{
    
    $conn = new PDO("mysql:host=$servidor;port=$port;dbname=" .$dbName, $user,$password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    echo "<h1>Successfully Connected</h1>";
    
    }catch(PDOException $ex){
    
    
    echo "<h1>Erro ao Conectar</h1>".$ex->getMessage();
    
    }


    

?>