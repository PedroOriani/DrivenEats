let pratov = '';
let bebidav = '';
let sobremesav = '';

function selecionarPrato(prato){
    const btnSelect = document.querySelector(".prato .selecionado");
    pratov = 1;

    console.log(pratov)
    console.log(bebidav)
    console.log(sobremesav)

    if (btnSelect !== null){
        btnSelect.classList.remove("selecionado");
    }

    prato.classList.add('selecionado');

    verificaSelecao()

} 

function selecionarBebida(bebida){
    const btnSelect = document.querySelector(".bebida .selecionado");
    bebidav = 1;

    console.log(bebidav)

    if (btnSelect !== null){
        btnSelect.classList.remove("selecionado");   
    }

    bebida.classList.add('selecionado');
    
    verificaSelecao()
} 

function selecionarSobremesa(sobremesa){
    const btnSelect = document.querySelector(".sobremesa .selecionado");
    sobremesav = 1;

    console.log(sobremesav)

    if (btnSelect !== null){
        btnSelect.classList.remove("selecionado");   
    }

    sobremesa.classList.add('selecionado');

    verificaSelecao()
} 

function verificaSelecao(){
    if(pratov !== ''){

        if(bebidav !== ''){

            if(sobremesav !== ''){

                const botaoConfirmar = document.querySelector('.button');
              
                botaoConfirmar.classList.add('button-green');
                botaoConfirmar.removeAttribute("disabled");
                botaoConfirmar.innerHTML = 'Fechar Pedido';

            }
        }  
     }
}

function fecharPedido(){
    let msg_whats = "https://wa.me/5511982247801?text=" + encodeURIComponent('Olá,%20gostaria%20de%20fazer%20o%20pedido:\n-%20Prato:%20Frango%20Yin%20Yang\n-%20Bebida:%20Coquinha%20Gelada\n-%20Sobremesa:%20Pudim\nTotal:%20R$%2027,70');
    window.open(msg_whats);
}