function encriptarTexto() {
  let textoOriginal = document.getElementById("inputText").value;
  let textoEncriptado = textoOriginal
   
    .replace("a", "ai")
    .replace("o", "ober")
    .replace("u", "ufat")
    .replace("e", "enter")
    .replace("i", "imes");
  document.getElementById("resultado").innerText = textoEncriptado;
  console.log("El texto original es: " + textoOriginal);
}

function desencriptarTexto() {
  let textoEncriptado = document.getElementById("inputText").value;
  let textoOriginal = textoEncriptado
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  document.getElementById("resultado").innerText = textoOriginal;
}


// let text = document.getElementById("inputText").value;

// function encryptDecrypt(text, operation) {

//   let result = '';
//   const key = {
//     e: 'enter',
//     i: 'imes',
//     a: 'ai',
//     o: 'ober',
//     u: 'ufat'
//   };

//   for (let i = 0; i < text.length; i++) {
//     const char = text.charAt(i);
//     if (operation === 'encrypt') {
//       if (key[char]) {
//         result += key[char];
//       } else {
//         result += char;
//       }
//     } else if (operation === 'decrypt') {
//       for (const keyChar in key) {
//         if (key[keyChar] === char) {
//           result += keyChar;
//           break;
//         }
//       }
//     }
//   }
//   console.log(result);
//   return result;
// }