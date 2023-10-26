function login(){
    usuario = String(document.form1.usuario.value);
    senha = String(document.form1.senha.value);

    if (usuario == "Fernanda" && senha == 28102004){
        window.open('dados.html')
    } else {
        alert("Dados Incorretos")
    }
}