const inputText = document.querySelector("#input-text");
const inputNumber = document.querySelector("#input-number");
const inputTel = document.querySelector("telefone");

//bloqueia qualquer valor que não for um número isso inclui o simbolo "-" de negativo, assim ele não pode inserir nenhum valor negativo.
inputText.addEventListener("keydown", function (event) {
  if (!Math.sign(event.key) && event.key !== "Backspace" && event.key !== "0") {
    event.preventDefault();
  }
});

inputNumber.addEventListener("keydown", function (event) {
  if (!Math.sign(event.key) && event.key !== "Backspace") {
    event.preventDefault();
  }
});

// máscara para telefone

function mascaraTelefone(event) {
  let tecla = event.key;
  let telefone = event.target.value.replace(/\D+/g, "");

  if (/^[0-9]$/i.test(tecla)) {
    telefone = telefone + tecla;
    let tamanho = telefone.length;

    if (tamanho >= 12) {
      return false;
    }

    if (tamanho > 10) {
      telefone = telefone.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (tamanho > 5) {
      telefone = telefone.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (tamanho > 2) {
      telefone = telefone.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
      telefone = telefone.replace(/^(\d*)/, "($1");
    }

    event.target.value = telefone;
  }

  if (!["Backspace", "Delete"].includes(tecla)) {
    return false;
  }
}


function Avaliar(estrela) {
  var url = window.location;
  url = url.toString()
  url = url.split("index.html");
  url = url[0];
 
  var s1 = document.getElementById("s1").src;
  var s2 = document.getElementById("s2").src;
  var s3 = document.getElementById("s3").src;
  var s4 = document.getElementById("s4").src;
  var s5 = document.getElementById("s5").src;
  var avaliacao = 0;
 
 if (estrela == 5){ 
  if (s5 == url + "img/star0.png") {
  document.getElementById("s1").src = "./img/star1.png";
  document.getElementById("s2").src = "./img/star1.png";
  document.getElementById("s3").src = "./img/star1.png";
  document.getElementById("s4").src = "./img/star1.png";
  document.getElementById("s5").src = "./img/star1.png";
  avaliacao = 5;
  } else {
  document.getElementById("s1").src = "./img/star1.png";
  document.getElementById("s2").src = "./img/star1.png";
  document.getElementById("s3").src = "./img/star1.png";
  document.getElementById("s4").src = "./img/star1.png";
  document.getElementById("s5").src = "./img/star0.png";
  avaliacao = 4;
 }}
  
  //ESTRELA 4
 if (estrela == 4){ 
  if (s4 == url + "img/star0.png") {
  document.getElementById("s1").src = "./img/star1.png";
  document.getElementById("s2").src = "./img/star1.png";
  document.getElementById("s3").src = "./img/star1.png";
  document.getElementById("s4").src = "./img/star1.png";
  document.getElementById("s5").src = "./img/star0.png";
  avaliacao = 4;
  } else {
  document.getElementById("s1").src = "./img/star1.png";
  document.getElementById("s2").src = "./img/star1.png";
  document.getElementById("s3").src = "./img/star1.png";
  document.getElementById("s4").src = "./img/star0.png";
  document.getElementById("s5").src = "./img/star0.png";
  avaliacao = 3;
 }}
 
 //ESTRELA 3
 if (estrela == 3){ 
  if (s3 == url + "img/star0.png") {
  document.getElementById("s1").src = "./img/star1.png";
  document.getElementById("s2").src = "./img/star1.png";
  document.getElementById("s3").src = "./img/star1.png";
  document.getElementById("s4").src = "./img/star0.png";
  document.getElementById("s5").src = "./img/star0.png";
  avaliacao = 3;
  } else {
  document.getElementById("s1").src = "./img/star1.png";
  document.getElementById("s2").src = "./img/star1.png";
  document.getElementById("s3").src = "./img/star0.png";
  document.getElementById("s4").src = "./img/star0.png";
  document.getElementById("s5").src = "./img/star0.png";
  avaliacao = 2;
 }}
  
 //ESTRELA 2
 if (estrela == 2){ 
  if (s2 == url + "img/star0.png") {
  document.getElementById("s1").src = "./img/star1.png";
  document.getElementById("s2").src = "./img/star1.png";
  document.getElementById("s3").src = "./img/star0.png";
  document.getElementById("s4").src = "./img/star0.png";
  document.getElementById("s5").src = "./img/star0.png";
  avaliacao = 2;
  } else {
  document.getElementById("s1").src = "./img/star1.png";
  document.getElementById("s2").src = "./img/star0.png";
  document.getElementById("s3").src = "./img/star0.png";
  document.getElementById("s4").src = "./img/star0.png";
  document.getElementById("s5").src = "./img/star0.png";
  avaliacao = 1;
 }}
  
  //ESTRELA 1
 if (estrela == 1){ 
  if (s1 == url + "img/star0.png") {
  document.getElementById("s1").src = "./img/star1.png";
  document.getElementById("s2").src = "./img/star0.png";
  document.getElementById("s3").src = "./img/star0.png";
  document.getElementById("s4").src = "./img/star0.png";
  document.getElementById("s5").src = "./img/star0.png";
  avaliacao = 1;
  } else {
  document.getElementById("s1").src = "./img/star0.png";
  document.getElementById("s2").src = "./img/star0.png";
  document.getElementById("s3").src = "./img/star0.png";
  document.getElementById("s4").src = "./img/star0.png";
  document.getElementById("s5").src = "./img/star0.png";
  avaliacao = 0;
 }}
  
  document.getElementById('rating').value = avaliacao;
  
 }