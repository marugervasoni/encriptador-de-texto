let classMensajeEncriptado = 'mensaje-encriptado';
let btnCopiar = document.getElementById('copiar');


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return elementoHTML;
}

function borrarElementoHTMLById(id) {
    let elementoHTML = document.getElementById(id).remove();        
}

function quitarContenidoBloqueMensaje() {
    borrarElementoHTMLById('muñeco');
    borrarElementoHTMLById('ningun-mensaje');    
 }

 function agregarAtributo(elementoHTML, atributo, valor) {
    elementoHTML.setAttribute(atributo, valor);
 }

function encriptar() {

    let texto = document.getElementById('ingresar-texto').value;    
    let textoEncriptado = "";
    
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        
        switch (letra) {
            case 'a': 
                textoEncriptado += "ai";
                break;
            case 'e': 
                textoEncriptado += "enter";
                break;    
            case 'i': 
                textoEncriptado += "imes";
                break;
            case 'o': 
                textoEncriptado += "ober";
                break;    
            case 'u': 
                textoEncriptado += "ufat";
                break;
            default: 
                textoEncriptado += letra;
        }
    }
    quitarContenidoBloqueMensaje();

    let mensajeActual = asignarTextoElemento('p',textoEncriptado);
    agregarAtributo(mensajeActual,'class', classMensajeEncriptado);

    btnCopiar.removeAttribute('style');
}

// function desencriptar(params) {
    
// }

// function copiar(params) {
    
// }




