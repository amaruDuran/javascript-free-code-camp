function telephoneRegexWithParenthesisAndSpace(str) {
    let telRegexWithParenthesisAndSpace = /^(1\s?)?\(\d{3}\)\s?(\d{3})-(\d{4})$/g
    return telRegexWithParenthesisAndSpace.test(str);
}

function telephoneRegexWith10NumbersAndSpace(str) {
    let telephoneRegexWith10NumbersAndSpace = /^(1\s)?(\d{3})\s?(-?\d{3})\s?(-?\d{4})$/g
    return telephoneRegexWith10NumbersAndSpace.test(str);
}

function telephoneCheck(str) {
    return (telephoneRegexWithParenthesisAndSpace(str) || telephoneRegexWith10NumbersAndSpace(str));
  }

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
