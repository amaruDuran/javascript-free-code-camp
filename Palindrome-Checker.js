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

    var clean_str = str.toLowerCase();
    clean_str = quitarCaracteresEspeciales(clean_str, caracteresEspeciales)
    let reverse_string = reverseString(clean_str);
    
    return clean_str == reverse_string;
}

console.log(palindrome("0_0 (: /-\ :) 0-0"))
