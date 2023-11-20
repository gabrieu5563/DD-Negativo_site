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
            window.location.href = "orcamento_comp.html?type=" + tipo_orcamento;
        } else {
            if(tipo_orcamento == 3){
                window.location.href = "outro.html"
            }
        }
    }
}


//celular

let marca_orcamento = 0;

let tipo_reparo = 0;


function marca(buttonId, valor) {
    document.querySelectorAll('.option2_cell').forEach(button => {
    button.classList.remove('clicked');
    });
    document.getElementById(buttonId).classList.add('clicked');

    marca_orcamento = valor;
    console.log('marca = ' + marca_orcamento);
}

function reparo_celular(buttonId, valor) {
    document.querySelectorAll('.option2_reparo').forEach(button => {
        button.classList.remove('clicked');
    });
    document.getElementById(buttonId).classList.add('clicked');

    tipo_reparo = valor;
    console.log('tipo de reparo = ' + tipo_reparo);
}

function continuar_celular(){
    if(marca_orcamento == 4 || tipo_reparo == 8){
        window.location.href="outro.html"
    } else {
        window.location.href="orcamento_final.html?type=" + tipo_orcamento;    
    }
}


//computador

let tipo_reparo_comp = 0;

function reparo_comp(buttonId, valor) {
    document.querySelectorAll('.option2_reparo').forEach(button => {
        button.classList.remove('clicked');
    });
    document.getElementById(buttonId).classList.add('clicked');

    tipo_reparo_comp = valor;
    console.log('tipo de reparo = ' + tipo_reparo_comp);
}

function continuar_comp(){
    const urlParams = new URLSearchParams(window.location.search);
    const tipo_orcamento_final = urlParams.get('type');

    if(tipo_reparo_comp == 8){
        window.location.href="outro.html"
    } else {
        window.location.href = "orcamento_final.html?type=" + tipo_orcamento_final + "&tipo_reparo=" + tipo_reparo_comp;    
    }
}

function voltar_tipo(){
    if(tipo_orcamento == 1){
        window.location.href = "orcamento_celular.html"
    } else {
        window.location.href = "orcamento_comp.html"
    }
}

//orçamento final

let tipo_orcamento_final = 0;
let tipo_reparo_comp_final = 0;

function teste() {
    const urlParams = new URLSearchParams(window.location.search);
    tipo_orcamento_final = urlParams.get('type');
    tipo_reparo_comp_final = urlParams.get('tipo_reparo');

    console.log(tipo_orcamento_final);
    console.log(tipo_reparo_comp_final);
}

function exibir_tempo(){

    
    let output_tempo = 0;
    if(tipo_orcamento_final == 2){
        switch (tipo_reparo_comp_final) {
            case 1:
                output_tempo = "1";
                break;
            case 2:
                output_tempo = "2";
                break;
            case 3:
                output_tempo = "3";
                break;
            case 4:
                output_tempo = "4";
                break;
            case 5:
                output_tempo = "5";
                break;
            case 6:
                output_tempo = "6";
                break;
            case 7:
                output_tempo = "7";
                break;
            case 8:
                output_tempo = "8";
                break;
        }
        console.log(output_tempo)
    }
}