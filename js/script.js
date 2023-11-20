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
        window.location.href = "orcamento_celular.html?type=" + tipo_orcamento;
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
    const urlParams = new URLSearchParams(window.location.search);
    const tipo_orcamento_final = urlParams.get('type');
    
    if(marca_orcamento == 4 || tipo_reparo == 8){
        window.location.href="outro.html"
    } else {
        window.location.href="orcamento_final.html?type=" + tipo_orcamento_final + "&marca=" + marca_orcamento + "&tipo_reparo_cell=" + tipo_reparo;
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

function tempo_valor(){
    exibir_tempo()
    exibir_valor()
}

function exibir_tempo(){

    let tipo_orcamento_final = 0;
    let tipo_reparo_cell_final = 0;
    let tipo_reparo_comp_final = 0;


    const urlParams = new URLSearchParams(window.location.search);
    tipo_orcamento_final = parseInt(urlParams.get('type'))
    tipo_reparo_comp_final = parseInt(urlParams.get('tipo_reparo'))
    tipo_reparo_cell_final = parseInt(urlParams.get('tipo_reparo_cell'))

    console.log(tipo_orcamento_final);
    console.log(tipo_reparo_comp_final);
    console.log(tipo_reparo_cell_final);
    console.log('----------------')

    let output_tempo = 0;
    if(tipo_orcamento_final == 2){
        //computador
        switch (tipo_reparo_comp_final) {
            case 1:
                output_tempo = 5;
                break;
            case 2:
                output_tempo = 2;
                break;
            case 3:
                output_tempo = 2;
                break;
            case 4:
                output_tempo = 5;
                break;
            case 5:
                output_tempo = 1;
                break;
            case 6:
                output_tempo = 1;
                break;
            case 7:
                output_tempo = 3;
                break;
            default:
                output_tempo = 3;
                break;
        }
    } else {
        //celular
        switch (tipo_reparo_cell_final) {
            case 1:
                output_tempo = 3;
                break;
            case 2:
                output_tempo = 1;
                break;
            case 3:
                output_tempo = 2;
                break;
            case 4:
                output_tempo = 5;
                break;
            case 5:
                output_tempo = 5;
                break;
            case 6:
                output_tempo = 3;
                break;
            case 7:
                output_tempo = 3;
                break;
            default:
                output_tempo = 3;
                break;
        }
    }

    console.log(output_tempo)

    const item_tempo = document.createElement("li")
    const valor_tempo = document.createElement("h3")

    valor_tempo.innerHTML = output_tempo + ' dias'

    item_tempo.appendChild(valor_tempo)

    document.getElementById("tempo_reparo").appendChild(item_tempo)
}

function exibir_valor(){

    let tipo_orcamento_final = 0;
    let tipo_reparo_cell_final = 0;
    let tipo_reparo_comp_final = 0;
    let marca_cell_final = 0;


    const urlParams = new URLSearchParams(window.location.search);
    tipo_orcamento_final = parseInt(urlParams.get('type'))
    tipo_reparo_comp_final = parseInt(urlParams.get('tipo_reparo'))
    tipo_reparo_cell_final = parseInt(urlParams.get('tipo_reparo_cell'))
    marca_cell_final = parseInt(urlParams.get('marca'))

    console.log(tipo_orcamento_final);
    console.log(tipo_reparo_comp_final);
    console.log(tipo_reparo_cell_final);
    console.log(marca_cell_final)
    console.log('----------------')

    let output_valor = 0;
    if(tipo_orcamento_final == 2){
        //computador
        switch (tipo_reparo_comp_final) {
            case 1:
                output_valor = 699.99;
                break;
            case 2:
                output_valor = 399.99;
                break;
            case 3:
                output_valor = 349.99;
                break;
            case 4:
                output_valor = 1249.99;
                break;
            case 5:
                output_valor = 99.99;
                break;
            case 6:
                output_valor = 1099.99;
                break;
            case 7:
                output_valor = 399.99;
                break;
        }

    } else {
        //celular
        if(marca_cell_final == 1){
            //samsung
            switch (tipo_reparo_cell_final) {
                case 1:
                    output_valor = 1199.99;
                    break;
                case 2:
                    output_valor = 399.99;
                    break;
                case 3:
                    output_valor = 249.99;
                    break;
                case 4:
                    output_valor = 449.99;
                    break;
                case 5:
                    output_valor = 1299.99;
                    break;
                case 6:
                    output_valor = 149.99;
                    break;
                case 7:
                    output_valor = 149.99;
                    break;
            }
        } else {
            if(marca_cell_final == 2){
                //apple
                switch (tipo_reparo_cell_final) {
                    case 1:
                        output_valor = 1899.99;
                        break;
                    case 2:
                        output_valor = 799.99;
                        break;
                    case 3:
                        output_valor = 249.99;
                        break;
                    case 4:
                        output_valor = 749.99;
                        break;
                    case 5:
                        output_valor = 2799.99;
                        break;
                    case 6:
                        output_valor = 149.99;
                        break;
                    case 7:
                        output_valor = 149.99;
                        break;
                }
            } else {
                //xiaomi
                switch (tipo_reparo_cell_final) {
                    case 1:
                        output_valor = 1199.99;
                        break;
                    case 2:
                        output_valor = 299.99;
                        break;
                    case 3:
                        output_valor = 199.99;
                        break;
                    case 4:
                        output_valor = 349.99;
                        break;
                    case 5:
                        output_valor = 1199.99;
                        break;
                    case 6:
                        output_valor = 149.99;
                        break;
                    case 7:
                        output_valor = 139.99;
                        break;
                }
            }
        } 
    }

    console.log(output_valor)

    const item_valor = document.createElement("li")
    const valor_valor = document.createElement("h3")

    valor_valor.innerHTML = 'R$ ' + output_valor;

    item_valor.appendChild(valor_valor)

    document.getElementById("valor_reparo").appendChild(item_valor)
}

function agendar(){
    alert("Conserto agendado")
    window.location.href = "index.html"
}