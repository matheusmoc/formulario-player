<?php
session_start();

include_once './conexao.php';



$nome = filter_input(INPUT_POST, "nome", FILTER_SANITIZE_STRING);
$sobrenome = filter_input(INPUT_POST, "sobrenome", FILTER_SANITIZE_STRING);
$nick = filter_input(INPUT_POST, "nick", FILTER_SANITIZE_STRING);
$id = filter_input(INPUT_POST, "id", FILTER_SANITIZE_STRING);
$idade = filter_input(INPUT_POST, "idade", FILTER_SANITIZE_STRING);
$genero = filter_input(INPUT_POST, "genero", FILTER_SANITIZE_STRING);
$telefone = filter_input(INPUT_POST, "telefone", FILTER_SANITIZE_STRING);
$funcao = filter_input(INPUT_POST, "funcao", FILTER_SANITIZE_STRING);
$troca = filter_input(INPUT_POST, "troca", FILTER_SANITIZE_STRING);
$comentario = filter_input(INPUT_POST, "comentario", FILTER_SANITIZE_STRING);
$avaliacao = filter_input(INPUT_POST, "avaliacao", FILTER_SANITIZE_STRING);



var_dump($_POST);


//Insere os dados no banco
$get_data = "INSERT INTO form_player (
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
    :nome, 
    :sobrenome, 
    :nick, 
    :id, 
    :idade, 
    :genero, 
    :telefone, 
    :funcao, 
    :troca, 
    :comentario, 
    :avalicao, 
    NOW()
)";

$insert_data = $conn->prepare($get_data);
$insert_data->bindParam(':nome', $nome);
$insert_data->bindParam(':sobrenome', $sobrenome);
$insert_data->bindParam(':nick', $nick);
$insert_data->bindParam(':id', $id);
$insert_data->bindParam(':idade', $idade);
$insert_data->bindParam(':genero', $genero);
$insert_data->bindParam(':telefone', $telefone);
$insert_data->bindParam(':funcao', $funcao);
$insert_data->bindParam(':troca', $troca);
$insert_data->bindParam(':comentario', $comentario);
$insert_data->bindParam(':avaliacao', $avaliacao);

$insert_data->execute();
