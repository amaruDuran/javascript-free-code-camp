function reverseString(str) {
    return str.split('').reverse().join('');
}

function quitarCaracteresEspeciales(str, caracteresEspeciales) {
    for (const caracter of caracteresEspeciales) {
        str = str.replaceAll(caracter, "");
    }
    return str;
}

function palindrome(str) {
    const caracteresEspeciales = [
        " ",
        "_",
        ".",
        "-",
        ",",
        "(",
        ")"
    ]

    let cleanStr = str.toLowerCase();
    cleanStr = quitarCaracteresEspeciales(cleanStr, caracteresEspeciales)
    let _reverseString = reverseString(cleanStr);
    
    return cleanStr == _reverseString;
}

console.log(palindrome("0_0 (: /-\ :) 0-0"))
