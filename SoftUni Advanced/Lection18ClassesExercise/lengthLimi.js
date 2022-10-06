class Stringer {
  constructor(str, length) {
    this.innerString = str;
    this.innerLenght = length;
  }
  increase(lenght) {
    this.innerLenght += lenght;
  }
  decrease(lenght) {
    this.innerLenght -= lenght;
    if (this.innerLenght < 0) {
      this.innerLenght = 0;
    }
  }
  toString(){
    if (this.innerLenght === 0) {
      return '...'
    }else if(this.innerString.length > this.innerLenght){
      return this.innerString.substring(0, this.innerLenght) + '...';
    }else{
      return this.innerString
    }
  }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);

console.log(test.toString()); // Te...

test.decrease(5);

console.log(test.toString()); // ...

test.increase(4);

console.log(test.toString()); // Test
