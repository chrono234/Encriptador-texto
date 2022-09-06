const InputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const parrafo = document.querySelector(".parrafo")

function btnEncriptar() {
  const textoEncriptado = encriptar(InputTexto.value);
  mensaje.value = textoEncriptado;
  mensaje.style.backgroundImage = "none";
  parrafo.style.display = "none";
  InputTexto.value = "";
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptada;
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(InputTexto.value);
  mensaje.value = textoDesencriptado;
  mensaje.style.backgroundImage = "none";
  parrafo.style.display = "none";
  InputTexto.value = "";
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptada;
}

function copiar() {
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value);
  mensaje.style.backgroundImage = "none";
  parrafo.style.display = "none";
  mensaje.value = "";
}
