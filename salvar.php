<?php
session_start();

include_once './conexao.php';



$nome = $_POST[ "nome"];
$sobrenome = $_POST[ "sobrenome"];
$nick = $_POST[ "nick"];
$id = $_POST[ "id"];
$idade = $_POST[ "idade"];
$genero = $_POST[ "genero"];
$telefone = $_POST[ "telefone"];
$funcao = $_POST[ "funcao"];
$troca = $_POST[ "troca"];
$comentario = $_POST[ "comentario"];
$avaliacao = $_POST[ "avaliacao"];



var_dump($_POST);


//Insere os dados no banco
$sql = "INSERT INTO form_player (
    nome,
    sobrenome,
    nick,
    id,
    idade,
    genero,
    telefone,
    funcao,
    troca,
    comentario,
    avalicao
) VALUES (
'$nome',
'$sobrenome',
'$nick',
'$id',
'$idade',
'$genero',
'$telefone',
'$funcao',
'$troca',
'$comentario',
'$avaliacao',
    NOW()
)";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);




