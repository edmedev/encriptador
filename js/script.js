const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

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

function botonEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

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

function botonDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
}

function copiarTexto() {
    mensaje.select();
    document.execCommand("copy");
    console.log("Texto copiado");
}

