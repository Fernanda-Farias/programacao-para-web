imagem = null

function on(){
    if(imagem == null){  
        document.getElementById("imagem").src = "off.png";
        imagem = 1
    } else if(imagem == 1){ 
        document.getElementById("imagem").src = "on.png";
        imagem = null
    }
}

function calculo(){
    if (imagem == null) {
    // carro = String(document.formulario1.carro.value);
    carro = document.getElementById('carro').value
    valor = parseFloat(document.getElementById('valor').value)
    km = parseFloat(document.getElementById('km').value)
    combustivel = document.getElementById('combustivel').value;
    
    if(combustivel == 'alcool') {
        litros = valor / 3.15
        rodar = litros * 10.5
        total = rodar + km
        document.getElementById('resultado').innerHTML = "Resultado: Seu " + carro + " irá rodar " + rodar + " km, com R$" + valor + ", e terá " + total + "km" ;

    } else if (combustivel == 'gasolina') {
        litros = valor / 4.05
        rodar = litros * 12.5
        total = rodar + km
        document.getElementById('resultado').innerHTML = "Resultado: Seu", carro, "irá rodar", rodar, "km, com R$", valor, ", e terá", total, "km" ;
    }
  } else {

  }
}