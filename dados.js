function dados(){
    peso = parseFloat(document.form1.peso.value);
    altura = parseFloat(document.form1.altura.value);
    imc = peso/(altura * altura)

    if (imc < 18.5) {
        document.getElementById('resultado').innerHTML = imc;
        document.getElementById('classificacao').innerHTML = "Abaixo do peso"
    }
    else if (imc >= 18.5 && imc <= 25 ) {
        document.getElementById('resultado').innerHTML = imc;
        document.getElementById('classificacao').innerHTML = "Normal"
    }
    else if (imc >= 25 && imc <= 30 ) {
        document.getElementById('resultado').innerHTML = imc;
        document.getElementById('classificacao').innerHTML = "Excesso de peso"
    }
    else if (imc >= 30 && imc <= 35 ) {
        document.getElementById('resultado').innerHTML = imc;
        document.getElementById('classificacao').innerHTML = "Obesidade I"
    }
    else if (imc > 35 ) {
        document.getElementById('resultado').innerHTML = imc;
        document.getElementById('classificacao').innerHTML = "Obesidade II"
    }
    else {
        document.getElementById('resultado').innerHTML = "imc inválido"
    }
}