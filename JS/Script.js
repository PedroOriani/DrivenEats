let pratov = '';
let bebidav = '';
let sobremesav = '';
let Nprato = '';
let Nbebida = '';
let Nsobremesa = '';
let Vprato = '';
let Vbebida = '';
let Vsobremesa = '';


function selecionarPrato(prato){
    const btnSelect = document.querySelector(".prato .selecionado");
    pratov = 1;

    if (btnSelect !== null){
        btnSelect.classList.remove("selecionado");
    }

    prato.classList.add('selecionado');

    verificaSelecao()

} 

function selecionarBebida(bebida){
    const btnSelect = document.querySelector(".bebida .selecionado");
    bebidav = 1;

    if (btnSelect !== null){
        btnSelect.classList.remove("selecionado");   
    }

    bebida.classList.add('selecionado');
    
    verificaSelecao()
} 

function selecionarSobremesa(sobremesa){
    const btnSelect = document.querySelector(".sobremesa .selecionado");
    sobremesav = 1;

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

    Nprato = document.querySelector('.prato .selecionado .nome').innerText;
    
    Nbebida = document.querySelector('.bebida .selecionado .nome').innerText;
    
    Nsobremesa = document.querySelector('.sobremesa .selecionado .nome').innerText;
    
    Vprato = document.querySelector('.prato .selecionado .valor').innerText;
    Vprato = Vprato.substring(2)
    Vprato = Vprato.replace(",",".")

    Vbebida = document.querySelector('.bebida .selecionado .valor').innerText;
    Vbebida = Vbebida.substring(2)
    Vbebida = Vbebida.replace(",",".")

    Vsobremesa = document.querySelector('.sobremesa .selecionado .valor').innerText;
    Vsobremesa = Vsobremesa.substring(2)
    Vsobremesa = Vsobremesa.replace(",",".")
    
    let total = Number(Vprato) + Number(Vbebida) + Number(Vsobremesa);  
    total = total.toFixed(2);

    let msg_whats = "https://wa.me/5511982247801?text=" + encodeURIComponent(`Olá, gostaria de fazer o pedido:\n- Prato: ${Nprato}\n- Bebida: ${Nbebida}\n- Sobremesa: ${Nsobremesa}\nTotal: R$ ${total.replace(".",",")}`);
    window.open(msg_whats);
}