function telephoneCheck(str) {
    // let telRegex = /(\d{3,4})-?/g
    let telRegex = /[\(]?(\d{3})[\)-\s]?\s?(\d{3})[-\s]?(\d{4})/g
    return telRegex.test(str);
  }

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("(555) 555-5555"));
console.log(telephoneCheck("555 555 5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("1 555 555 5555"));
