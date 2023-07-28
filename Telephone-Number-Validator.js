function telephoneRegexWithMinus(str){
    let telRegexWithMinus = /^(1\s)?(\d{3})-(\d{3})-(\d{4})/g
    return telRegexWithMinus.test(str);
}

function telephoneRegexWithParenthesisAndSpace(str) {
    let telRegexWithParenthesisAndSpace = /^(1\s?)?\(\d{3}\)\s?(\d{3})-(\d{4})$/g
    return telRegexWithParenthesisAndSpace.test(str);
}

function telephoneRegexWith10NumbersAndSpace(str) {
    let telephoneRegexWith10NumbersAndSpace = /^(1\s)?(\d{3})\s?(\d{3})\s?(\d{4})$/g
    return telephoneRegexWith10NumbersAndSpace.test(str);
}

function telephoneCheck(str) {
    return (telephoneRegexWithMinus(str)
     || telephoneRegexWithParenthesisAndSpace(str)
     || telephoneRegexWith10NumbersAndSpace(str));
  }

console.log("TEST TelephoneRegexWithMinus") 
console.log(telephoneRegexWithMinus("555-555-5555"));
console.log(telephoneRegexWithMinus("(555)555-5555"));
console.log(telephoneRegexWithMinus("(555) 555-5555"));
console.log(telephoneRegexWithMinus("555 555 5555"));
console.log(telephoneRegexWithMinus("5555555555"));
console.log(telephoneRegexWithMinus("1 555 555 5555"));

console.log("")
console.log("TEST TelephoneRegexWithMinus.")
console.log(telephoneRegexWithParenthesis("555-555-5555"));
console.log(telephoneRegexWithParenthesis("(555)555-5555"));
console.log(telephoneRegexWithParenthesis("(555) 555-5555"));
console.log(telephoneRegexWithParenthesis("555 555 5555"));
console.log(telephoneRegexWithParenthesis("5555555555"));
console.log(telephoneRegexWithParenthesis("1 555 555 5555"));

console.log("")
console.log("TEST telephoneRegexWithParenthesisAndSpace")
console.log(telephoneRegexWithParenthesisAndSpace("555-555-5555"));
console.log(telephoneRegexWithParenthesisAndSpace("(555)555-5555"));
console.log(telephoneRegexWithParenthesisAndSpace("(555) 555-5555"));
console.log(telephoneRegexWithParenthesisAndSpace("555 555 5555"));
console.log(telephoneRegexWithParenthesisAndSpace("5555555555"));
console.log(telephoneRegexWithParenthesisAndSpace("1 555 555 5555"));

console.log("")
console.log("TEST telephoneRegexWith10NumbersAndSpace")
console.log(telephoneRegexWith10NumbersAndSpace("555-555-5555"));
console.log(telephoneRegexWith10NumbersAndSpace("(555)555-5555"));
console.log(telephoneRegexWith10NumbersAndSpace("(555) 555-5555"));
console.log(telephoneRegexWith10NumbersAndSpace("555 555 5555"));
console.log(telephoneRegexWith10NumbersAndSpace("5555555555"));
console.log(telephoneRegexWith10NumbersAndSpace("1 555 555 5555"));
