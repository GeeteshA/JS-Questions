// Program to check if a No. is divisable by 7 ? 
function divisable(num){
 if( num%7 == 0){
    console.log("divisable by 7")
 }
 else console.log("not divisable")
}
divisable(40)

// Program to check if a No. is multiple of 3
function multiple(num){
    if(num%3==0){
        console.log("multiple of three")
    }
    else console.log("not multiple")
}
multiple(15)

// Program to check if a No. is positive or not
function positive(num){
    if(num > 0 ){
        console.log("Positive no")
    }
    else console.log("Negetive no.")
}
positive(-9)

// Program to check if a No. units place 4
function untiFor(num){
    if(num%10 == 4){
        console.log("Unit's place having 4")
    }
    else console.log("other number")
}
untiFor(242)

// Program to check if a No. is 3 digit number
function threeDigit(num){
    if(num > 99 && num <= 999 ){
        console.log("Three digit number")
    }
    else console.log("Not a three digit number")
}
threeDigit(999)

// Program to check if a No. is odd or even
function evenOdd(num){
    if( num%2 == 0 ){
        console.log("Even number")
    }
    else console.log("Odd number")
}
evenOdd(5)
// evenOdd(prompt("Enter a no to check if it is a even or not:"))

// Program to check which is greater in two given no.
function greater(num1, num2){
    if( num1 > num2){
        console.log("first no. is Greater")
    }
    else console.log("Second no. is Greater")
} 
greater(3,4)

function smaller(num1, num2){
    if( num1 < num2)
        console.log("First is least no.")
    else console.log("Second id least no.")
}
smaller(3,4)


let a = 4;
let b = 6;
console.log(a&b)
// a++;
// ++a;
// console.log(a);
// console.log(++a);
// console.log(a++);
// console.log(a)

function threeNum(num1,num2,num3){
    if( num1 )
}