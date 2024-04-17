
var adicionar = document.getElementById("Adicionar");
var excluir = document.getElementById("Excluir");
var editar = document.getElementById("Editar");
var botoes = {}
var indice = 0;

editar.addEventListener("click", function() {

  var indiceEdicao = document.getElementById("NumeroEdicao").value - 1;
  var nome = document.getElementById("NomeEdicao").value;

  botoes[indiceEdicao].innerHTML = (indiceEdicao + 1) + "- <input id='" + indiceEdicao +"' type='checkbox' class='checkbox'> " + nome;

  document.getElementById('novosBotoes').innerHTML = ' ';
  for (let index = 0; index < indice; index++) {
    divNovosBotoes.appendChild( botoes[index] );
  }

  document.getElementById("NumeroEdicao").value = ' ';
  document.getElementById("NomeEdicao").value = ' ';

});

excluir.addEventListener("click", function() {

  document.getElementById('novosBotoes').innerHTML= '';
  botoes = {};
  indice = 0;

});

adicionar.addEventListener("click", function() {
  if( TextoBotao.value == ' '){
    alert("Dê um nome a tarefa")
  }else{
    AddElement( TextoBotao.value );
    TextoBotao.value = ' ';
  }
});

function AddElement( label ) {

  divNovosBotoes = document.getElementById("novosBotoes");

  botao = document.createElement("p")
  botao.innerHTML = (indice + 1) + "- <input id='" + indice +"' type='checkbox' class='checkbox'> " + label;
  
  divNovosBotoes.appendChild( botao );

  botoes[indice] = botao;
  indice++;

}
