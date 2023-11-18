function copiar_tel1(){
    let tel = document.getElementById("tel1").value
    navigator.clipboard.writeText(tel)
    alert("Número copiado")
    console.log(tel)
}

function copiar_tel2(){
    let tel = document.getElementById("tel2").value
    navigator.clipboard.writeText(tel)
    alert("Número copiado")
    console.log(tel)
}

function copiar_wpp1(){
    let tel = document.getElementById("wpp1").value
    navigator.clipboard.writeText(tel)
    alert("Número copiado")
    console.log(tel)
}

function copiar_wpp2(){
    let tel = document.getElementById("wpp2").value
    navigator.clipboard.writeText(tel)
    alert("Número copiado")
    console.log(tel)
}

function copiar_mail1(){
    let tel = document.getElementById("mail1").value
    navigator.clipboard.writeText(tel)
    alert("E-mail copiado")
    console.log(tel)
}

function redirect() {
    window.location.href = "orcamento.html";
}

let tipo_orcamento = 0;

function tipo(buttonId, valor) {
    document.querySelectorAll('.option2').forEach(button => {
    button.classList.remove('clicked');
    });
    document.getElementById(buttonId).classList.add('clicked');

    tipo_orcamento = valor;
    console.log('tipo = ' + tipo_orcamento);
}

let marca_orcamento = 0;

function marca(buttonId, valor) {
    document.querySelectorAll('.option2_cell').forEach(button => {
    button.classList.remove('clicked');
    });
    document.getElementById(buttonId).classList.add('clicked');

    marca_orcamento = valor;
    console.log('marca = ' + marca_orcamento);
}