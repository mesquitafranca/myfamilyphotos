alert("Javascript is Here");

var caixaTexto = document.getElementById("caixaTexto");
var botaoOk = document.getElementById("botaoOk");
var ul = document.querySelector("ul");
var valor;

botaoOk.addEventListener("click", function(){
	if (caixaTexto.value.length > 0)
	{
		console.log("passou")
		var criarElemento = document.createElement("li");
		criarElemento.appendChild(document.createTextNode(caixaTexto.value));
		ul.appendChild(criarElemento);
		caixaTexto.value = ""; 
	}
})