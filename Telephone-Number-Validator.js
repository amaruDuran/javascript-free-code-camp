function telephoneRegexWithMinus(str){
    let telRegexWithMinus = /(\d{3})-(\d{3})-(\d{4})/g
    return telRegexWithMinus.test(str);
}

function telephoneRegexWithParenthesis(str){
    /[\(]?(\d{3})[\)-\s]?\s?(\d{3})[-\s]?(\d{4})/g
}

function telephoneCheck(str) {
    let testTelRegexWithMinus = telephoneRegexWithMinus(str);
    let telRegexWithParenthesis = 
    let telRegexWithParenthesisAndSpace = /(\(\d{3}\))\s(\d{3})-(\d{4})/g
    telRege3 = /(\(\d{3}\))|(\d{3})[-\s]?\s?(\d{3})[-\s]?(\d{4})/g
    return telRegex.test(str);
  }

// TEST TelephoneRegexWithMinus.
console.log(telephoneRegexWithMinus("555-555-5555"));
console.log(telephoneRegexWithMinus("(555)555-5555"));
console.log(telephoneRegexWithMinus("(555) 555-5555"));
console.log(telephoneRegexWithMinus("555 555 5555"));
console.log(telephoneRegexWithMinus("5555555555"));
console.log(telephoneRegexWithMinus("1 555 555 5555"));
