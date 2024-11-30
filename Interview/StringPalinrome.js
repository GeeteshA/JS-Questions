// Program to check if string is palindrome or not
function isPalindrome(str) {
    str = str.toLowerCase();
    let reverse = str.split('').reverse().join("")
    console.log(reverse)
    if ( str === reverse ){
        return console.log("It is Palindrome")
    }
    else return console.log("It is not Palindrome")
        
}
isPalindrome("hello")

    