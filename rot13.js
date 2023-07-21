function rot13(str) {
    var alfabeto= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var alfabetoList = alfabeto.split("");
    var resul = "";
    let strList = str.split("");
    for (const caracter of strList) {
        let lenAlfabeto = alfabeto.length
        let indiceCaracterBuscado = alfabetoList.indexOf(caracter);
        if (indiceCaracterBuscado > -1 && 
            (lenAlfabeto - 1 - indiceCaracterBuscado) >= 13) {
            let indiceRot = indiceCaracterBuscado + 13;
            resul += alfabetoList[indiceRot];
        }
        else{
            console.log(caracter);
            resul += caracter;
        }
    }
    return resul;
  }
  
  console.log(rot13("SERR PBQR PNZC"));