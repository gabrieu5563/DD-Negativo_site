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

function voltar(){
    window.location.href="orcamento.html"
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

function continuar(){
    if(tipo_orcamento == 1){
        window.location.href = "orcamento_celular.html"
    } else {
        if(tipo_orcamento == 2){
            window.location.href = "orcamento_comp.html"
        } else {
            if(tipo_orcamento == 3){
                window.location.href = "contato.html"
            }
        }
    }
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

let tipo_reparo = 0;

function reparo(buttonId, valor) {
    document.querySelectorAll('.option2_reparo').forEach(button => {
        button.classList.remove('clicked');
    });
    document.getElementById(buttonId).classList.add('clicked');

    tipo_reparo = valor;
    console.log('tipo de reparo = ' + tipo_reparo);
}

function continuar_final(){
    window.location.href="orcamento_final.html"    
}