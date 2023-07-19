function obtenerTablaSimbolosRomanos(){
    var simbolosRomanos = {
        1000: "M",
        900: "CM",
        500: "D",
        400: "CD",
        100: "C",
        90: "XC",
        50: "L",
        40: "XL",
        10: "X",
        9: "IX",
        5: "V",
        4: "IV",
        1: "I"
    };

    return simbolosRomanos;
}

function buscarMenorCompatible(num, simbolosRomanos){
    let numerosArabicos = Object.keys(simbolosRomanos);
    numerosArabicos = numerosArabicos.sort((a, b) => b - a);
    
    for (const numeroArabico of numerosArabicos) {
        if (numeroArabico <= num) {
            return numeroArabico;
        }
    }
}

function convertToRoman(num) {
    var resul = "";
    let simbolosRomanos = obtenerTablaSimbolosRomanos();

    while (num != 0) {
        let menorCompatible = buscarMenorCompatible(num, simbolosRomanos);
        resul += simbolosRomanos[menorCompatible];
        num-= menorCompatible;
    }

    return resul;
   }
   
console.log(convertToRoman(1003));