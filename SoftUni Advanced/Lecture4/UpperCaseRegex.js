function upperCase(text) {
    let wordText = text.match(/\w+/g).join(', ');
    let result = wordText.toUpperCase();
    return result
}
console.log(upperCase('hello'));
console.log(upperCase('Hi, how are you?'));
