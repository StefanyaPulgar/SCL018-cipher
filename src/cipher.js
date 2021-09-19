const cipher = {
  encode: (cifrarTexto, desplazamiento) => {
    let contraseña = cifrarTexto;
    let contraseñaCifrada = "";

    for (let i = 0; i < contraseña.length;i++) {
      let posicionCifrada = 0;
      let posicionOriginal =contraseña.charCodeAt(i);

      if (posicionOriginal >= 97 && posicionOriginal <= 122) {
        
          posicionCifrada = (posicionOriginal - 97 + desplazamiento) %26 + 97;
        } else if (posicionOriginal >= 65 && posicionOriginal<= 90 ) {
          posicionCifrada = (posicionOriginal - 65 + desplazamiento) %26 + 65;
        }
      else {
            posicionCifrada = posicionOriginal;
        }
      contraseñaCifrada += String.fromCharCode(posicionCifrada);
    }
    return contraseñaCifrada;
   },

   decode: (descifrarTexto, desplazamiento1) => {
    let contrasen = descifrarTexto;
    let contrasenaDescifrada = "";

    for (let i = 0; i < contrasen.length;i++) {
      let posicionCifrad = 0;
     
      let posicionOrigina =contrasen.toUpperCase().charCodeAt(i);

      if (posicionOrigina >= 97 && posicionOrigina <= 122) {
        
          posicionCifrad = (posicionOrigina + 97 - desplazamiento1) %26 + 97;
        } else if (posicionOrigina >= 65 && posicionOrigina<= 90 ) {
          posicionCifrad = (posicionOrigina + 65 - desplazamiento1) %26 + 65;
        }
      else {
            posicionCifrad = posicionOrigina;
        }
        
      contrasenaDescifrada += String.fromCharCode(posicionCifrad);
      
    }
   
    return contrasenaDescifrada;
   },
};

export default cipher;
