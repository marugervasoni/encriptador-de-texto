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

    let imgMuñeco = document.getElementById('muñeco');
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

    imgMuñeco ? quitarContenidoBloqueMensaje() : "";

    let mensajeActual = asignarTextoElemento('p',textoEncriptado);
    agregarAtributo(mensajeActual,'class', classMensajeEncriptado);

     btnCopiar.removeAttribute('style');    
}


function desencriptar() {
    
    let imgMuñeco = document.getElementById('muñeco');
    let texto = document.getElementById('ingresar-texto').value;    
    let textoDesencriptado = texto;

    const sustituciones = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    for (const [clave, valor] of Object.entries(sustituciones)) {
        textoDesencriptado = textoDesencriptado.split(clave).join(valor);
    }

    imgMuñeco ? quitarContenidoBloqueMensaje() : "";

    let mensajeActual = asignarTextoElemento('p',textoDesencriptado);
    agregarAtributo(mensajeActual,'class', classMensajeEncriptado);

    btnCopiar.hasAttribute('style') ? btnCopiar.removeAttribute('style') : "";
}


// }

// function copiar(params) {
    
// }




