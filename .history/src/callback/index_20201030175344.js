const sum = (num1, num2) => num1 + num2;

const calc = (num1, num2, callback) => callback(num1, num2);

console.log(calc(6, 5, sum));


const date = (callback) => {
  console.log(new Date);
  setTimeout(() => {
    let date = new Date;
    callback(date);
  }, 3000)
}