// Agregando variables
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// Función de la lógica para encriptar el mensaje
function encriptar(stringEncriptado) {
    let matrizMensaje = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();
    let i;

    for(i = 0; i < matrizMensaje.length; i++) {
        if(stringEncriptado.includes(matrizMensaje[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizMensaje[i][0], matrizMensaje[i][1]);
        }
    }

    return stringEncriptado;
}

// Función del evento para hacer clic al boton encriptar y mostrar el mensaje encriptado
function botonEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"; // función para eliminar la imagen de fondo al encriptar o desencriptar un mensaje
}

// Función de la lógica para desencriptar el mensaje
function desencriptar(stringDesencriptado) {
    let matrizMensaje = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();
    let i;

    for(i = 0; i < matrizMensaje.length; i++) {
        if(stringDesencriptado.includes(matrizMensaje[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizMensaje[i][1], matrizMensaje[i][0]);
        }
    }

    return stringDesencriptado;
}

// Función del evento para hacer clic al boton desencriptar y mostrar el mensaje desencriptado
function botonDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"; // función para eliminar la imagen de fondo al encriptar o desencriptar un mensaje
}

// Función para copiar el mensaje que ha sido encriptado o desencriptado
function copiarTexto() {
    mensaje.select();
    document.execCommand("copy");
    console.log("Texto copiado");
}

