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
function printNum(){
    let i = 10;
    while(i >= 1){
        console.log(i);
        i--;
    }
}
// printNum()

// Program to print 5 to 15 using for loop
function printLoop(){
 for(let i = 5; i <= 15; i++ ){
    console.log(i)
 }
}
// printLoop()

// Program to print 15 to 10 using for loop
function printLooprev(){
    for(let i = 15; i >= 10; i--){
        console.log(i)
    }
}
// printLooprev()

// Program to print even nmbers in 1 to 10 using while loop
function evenWhile(){
    let i = 1;
    while( i <= 10 ){
        if(i%2 == 0){
            console.log(i)
        }
        i++
        
    }
}
// evenWhile()

// Program to print odd nmbers in 1 to 10 using for loop
function oddFor(){
    for(let i=1; i <= 10; i++){
        if(i%2 != 0){
            console.log(i)
        }
    }
}
// oddFor()

// Program to print first 10 multiple of 4
function multipleFour(){
    for(let i= 1; i <= 10; i++){
        console.log(i * 4)
    }
}
// multipleFour()

// Program to print table of 6
function tableSix(){
    for(let i = 1; i <= 10; i++){
        console.log(`6 X ${i} = ${i*6}`)
    }
}
// tableSix()

// Program to print the factors of 24
function factor() {
    for(let i = 1; i <= 24; i++){
        if(24%i == 0){
            console.log(i)
        }
    }
}
// factor();
