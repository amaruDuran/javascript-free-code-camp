function rot13(str) {
    var alfabeto= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var alfabetoList = alfabeto.split("");
    var resul = "";
    let strList = str.split("");

    for (const caracter of strList) {
        let lenAlfabeto = alfabeto.length
        let indiceCaracterBuscado = alfabetoList.indexOf(caracter);
        let indiceRot = indiceCaracterBuscado + 13;

        if (indiceCaracterBuscado > -1 
            && (lenAlfabeto - 1 - indiceCaracterBuscado) >= 13) {
                resul += alfabetoList[indiceRot];
        }
        else if (indiceCaracterBuscado > -1 
            && (lenAlfabeto - 1 - indiceCaracterBuscado) < 13) {
                let alfabetoCircularList = (alfabeto + alfabeto).split("");
                resul += alfabetoCircularList[indiceRot];
        }
        else{
            resul += caracter;
        }
    }
    return resul;
  }
  
  // retorna: FREE CODE CAMP
  console.log(rot13("SERR PBQR PNZC"));