function obtenerTablaSimbolosRomanos(){
    var simbolosRomanos = {
        1000: "M",
        900: "D",
        500: "CD",
        400: "C",
        100: "XC",
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
            console.log(numeroArabico);
            return numeroArabico;
        }
    }
}

function convertToRoman(num) {
    let simbolosRomanos = obtenerTablaSimbolosRomanos();


    let str = simbolosRomanos[num];
    
    let menorCompatible = buscarMenorCompatible(num, simbolosRomanos);
    console.log(menorCompatible);
    return str;
   }
   
console.log(convertToRoman(1003));