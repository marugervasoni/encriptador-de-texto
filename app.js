document.getElementById('year').textContent = new Date().getFullYear();

let classMensajeEncriptado = 'mensaje-encriptado';
let idTextoACopiar = "texto-a-copiar";

let parrafoIngresarTexto = "Ingresa el texto que desees encriptar o desencriptar"

let imgMuñeco = document.getElementById('muñeco');
let h3NingunMsj = document.getElementById('ningun-mensaje');
let btnCopiar = document.getElementById('copiar');


function crearElementoHTML(tagName) {
    let elementoHTML = document.createElement(tagName);
    return elementoHTML;
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return elementoHTML;
}

function agregarAtributo(elementoHTML, atributo, valor) {
    elementoHTML.setAttribute(atributo, valor);
}

function validaciones() {
    let texto = document.getElementById('ingresar-texto').value;     
    let resultado; 

    if (/[A-Z]/.test(texto)) {
        resultado = document.getElementById('ingresar-texto').value = "";
        alert('Ingrese solo letras en minuscula')
    } else if (/[ÁÉÍÓÚÜáéíóúü]/.test(texto)) {
        resultado = document.getElementById('ingresar-texto').value = "";
        alert('Ingrese solo letras sin acentos')
    } else {
        resultado = texto;   
    }
    return resultado;
}

function quitarContenidoBloqueMensaje() {
    let noVisible = "display: none;"; 
    agregarAtributo(imgMuñeco, 'style', noVisible );
    agregarAtributo(h3NingunMsj, 'style', noVisible );
}

function cambiarContenidoBloqueMensaje(textoActual) {
    imgMuñeco ? quitarContenidoBloqueMensaje() : "";
    let mensajeActual = asignarTextoElemento('p',textoActual);
    agregarAtributo(mensajeActual,'class', classMensajeEncriptado);
    btnCopiar.removeAttribute('style');
}

function limpiarCaja() {
    document.querySelector('#ingresar-texto').value = "";
}

function condicionesIniciales() {
    imgMuñeco.removeAttribute('style');
    h3NingunMsj.removeAttribute('style');
    btnCopiar.setAttribute('style', "visibility: hidden");
    asignarTextoElemento('p', parrafoIngresarTexto).removeAttribute('class');
}

function encriptar() {
    let textoEncriptado = "";
    let texto = validaciones();
    if (texto != "") {
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
        cambiarContenidoBloqueMensaje(textoEncriptado);
        limpiarCaja();
    } else {
        condicionesIniciales();
    }
}

function desencriptar() {    
    let texto = validaciones();
    let textoDesencriptado = texto;
    const sustituciones = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };    

    if (texto != "") {
        for (const [clave, valor] of Object.entries(sustituciones)) {
            textoDesencriptado = textoDesencriptado.split(clave).join(valor);
        }
        cambiarContenidoBloqueMensaje(textoDesencriptado);
        limpiarCaja();
    } else {
        condicionesIniciales();
    }
}

function copiar() {
    let textoACopiar = document.getElementById(idTextoACopiar).innerText;
    const areaTransferencia = crearElementoHTML('input');  
    areaTransferencia.value = textoACopiar;

    document.body.appendChild(areaTransferencia);
    navigator.clipboard.writeText(textoACopiar)
    .then(() => {
        alert('Texto copiado al portapapeles');
    })
    .catch(err => {
        console.error('Error al copiar al portapapeles:', err);
    })
    .finally(() => {
        document.body.removeChild(areaTransferencia);
    });
}