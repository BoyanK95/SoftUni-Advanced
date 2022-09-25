function wordsUppercase(text) {
  let result = [];
  let buff = "";
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    if (
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122)
    ) {
      buff += text[i].toUpperCase();
    } else {
      result.push(buff);
      buff = "";
    }
  }
  if (buff) {
    result.push(buff);
  }
  let finalRes = result.filter((n)=> n);
  console.log(finalRes.join(', '));
}
wordsUppercase("Hi, how are you?");
wordsUppercase("hello");
