function Calcular(op){

    valor1 = parseFloat(document.formulario1.valor1.value);
    valor2 = parseFloat(document.formulario1.valor2.value);

    if (op==1){
        var result = valor1 + valor2
        document.querySelector(".resultado").innerHTML = result;
    }
    else if (op==2){
        var result = valor1 - valor2
        document.querySelector(".resultado").innerHTML = result;

    }
    else if (op==3){
        var result = valor1 * valor2
        document.querySelector(".resultado").innerHTML = result;
    }
    else if (op==4){
        var result = valor1 / valor2
        document.querySelector(".resultado").innerHTML = result;
    }
    else{
        alert("Erro na entrada dos dados")
    }

}