function selecionarPrato(prato){
    const btnSelect = document.querySelector(".prato .selecionado");

    console.log(btnSelect);


    if (btnSelect !== null){
        btnSelect.classList.remove("selecionado");
    }

    prato.classList.add('selecionado');

    const checkSelect = document.querySelector(".prato .invisible");
    console.log(checkSelect);

    if (checkSelect === null){
        checkSelect.classList.add('invisible');
    }

    prato.classList.remove('invisible');

} 

function selecionarBebida(bebida){
    const btnSelect = document.querySelector(".bebida .selecionado");

    if (btnSelect !== null){
        btnSelect.classList.remove("selecionado");   
    }

    bebida.classList.add('selecionado');
} 

function selecionarSobremesa(sobremesa){
    const btnSelect = document.querySelector(".sobremesa .selecionado");

    if (btnSelect !== null){
        btnSelect.classList.remove("selecionado");   
    }

    sobremesa.classList.add('selecionado');
} 
