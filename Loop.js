// Program to print 1 to 10 using while loop
function printNumbers() {
    let i = 1;
    while (i <= 10) {
        console.log(i);
        i++;
    }
}
// printNumbers();

// Program to print 10 to 1 using while loop
function printNum() {
    let i = 10;
    while (i >= 1) {
        console.log(i);
        i--;
    }
}
// printNum()

// Program to print 5 to 15 using for loop
function printLoop() {
    for (let i = 5; i <= 15; i++) {
        console.log(i)
    }
}
// printLoop()

// Program to print 15 to 10 using for loop
function printLooprev() {
    for (let i = 15; i >= 10; i--) {
        console.log(i)
    }
}
// printLooprev()

// Program to print even nmbers in 1 to 10 using while loop
function evenWhile() {
    let i = 1;
    while (i <= 10) {
        if (i % 2 == 0) {
            console.log(i)
        }
        i++

    }
}
// evenWhile()

// Program to print odd nmbers in 1 to 10 using for loop
function oddFor() {
    for (let i = 1; i <= 10; i++) {
        if (i % 2 != 0) {
            console.log(i)
        }
    }
}
// oddFor()

// Program to print first 10 multiple of 4
function multipleFour() {
    for (let i = 1; i <= 10; i++) {
        console.log(i * 4)
    }
}
// multipleFour()

// Program to print table of 6
function tableSix() {
    for (let i = 1; i <= 10; i++) {
        console.log(`6 X ${i} = ${i * 6}`)
    }
}
// tableSix()

// Program to print the factors of 24
function factor() {
    for (let i = 1; i <= 24; i++) {
        if (24 % i == 0) {
            console.log(i)
        }
    }
}
// factor();


// let a = undefined;
// console.log(a)
// a= 14;
// let b = undefined;
// console.log(b)
// console.log(a)
// b = 10;
// console.log(b)

// Ternary operator
let isAdmin = false;
const greetings = isAdmin ? 'Hello ! Admin' : "Hello! User";
// console.log(greetings)

let name = null;
const formatName = name ? `Hello! ${name}` : "unknown"
// console.log(formatName)

// Switch Statement 
// let day = parseInt(prompt('Name of day'))
// switch (day) {
//     case 1:
//         alert(`day-${day} is Monday`);
//         break;
//     case 2:
//         alert(`day-${day} is Tuesday`);
//         break;
//     case 3:
//         alert(`day-${day} is Wednesday`);
//         break;
//     case 4:
//         alert(`day-${day} is Thursday`);
//         break;
//     case 5:
//         alert(`day-${day} is Friday`);
//         break;
//     case 6:
//         alert(`day-${day} is Saturday`);
//         break;
//     case 7:
//         alert(`day-${day} is Sunday`);
//         break;
//     default:
//         console.log("Invalid day")
// }

// Program to print reverse of numbers
function reverseNum(num){
    let rev = 0
    while(num>0){
        let rem = num % 10;
        rev = rev * 10 +  rem;
        num = Math.floor(num/10);
    }
    return rev;
}
// console.log(reverseNum(1234))

// Programm to print all even and odd numbers till given number
function readEven(num){
    for( let i = 1; i <= num; i++){
        if(i%2==0){console.log(`${i} is even`)}
        else console.log(`${i} is odd`)
    }
}
// console.log(readEven(parseInt(prompt())))

// Factorial of number
function factorialNum(num){
    let fact = 1;
    str = ''
    for( let i = 1; i <= num;i++){
        if(i<num){
            str+=+i+"*"
        }
        else str+=+num
        fact = fact * i;
    }
    console.log(str+"="+fact)
}
// factorialNum(5)


// Program to print prime numbers up to a given number
function printPrime(limit) {
    for (let num = 2; num <= limit; num++) {
      let isPrime = true;
      for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
  
      if (isPrime) {
        console.log(num);
      }
    }
  }
  
//   printPrime(10);

  // Program to print perfect number
  function perfectNumber(num){
    let sum = 0;
    for(let i = 1; i < num; i++){
        if(num%i==0){
            sum = sum + i
        }
        
    }
    if(sum == num){
        console.log("is a perfect no")
    }
    else console.log("not a perfect no")
  }

// perfectNumber(6)

// LCM of a number
function findLcm(num1,num2){
    let lcm = (num1 > num2) ? num1 : num2;

    while( lcm % num1 !== 0 || lcm % num2 !== 0 ){
        lcm++;
    } return lcm;
}
console.log(findLcm(12,18))