function telephoneRegexWithMinus(str){
    let telRegexWithMinus = /(\d{3})-(\d{3})-(\d{4})/g
    return telRegexWithMinus.test(str);
}

function telephoneRegexWithParenthesis(str){
    let telRegexWithParenthesis = /(\(\d{3}\))(\d{3})-(\d{4})/g
    return telRegexWithParenthesis.test(str);
}

function telephoneRegexWithParenthesisAndSpace(str) {
    let telRegexWithParenthesisAndSpace = /(\(\d{3}\))\s(\d{3})-(\d{4})/g
    return telRegexWithParenthesisAndSpace.test(str);
}

function telephoneRegexWith10Numbers(str){
    let telephoneRegexWith10Numbers = /\d{10}/g
    return telephoneRegexWith10Numbers.test(str);
}

function telephoneCheck(str) {
    return (telephoneRegexWithMinus(str)
     || telephoneRegexWithParenthesis(str)
     || telephoneRegexWithParenthesisAndSpace(str)
     || telephoneRegexWith10Numbers(str));
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
console.log("TEST telephoneRegexWith10Numbers")
console.log(telephoneRegexWith10Numbers("555-555-5555"));
console.log(telephoneRegexWith10Numbers("(555)555-5555"));
console.log(telephoneRegexWith10Numbers("(555) 555-5555"));
console.log(telephoneRegexWith10Numbers("555 555 5555"));
console.log(telephoneRegexWith10Numbers("5555555555"));
console.log(telephoneRegexWith10Numbers("1 555 555 5555"));
