//Number Is Not Prime Or Not

//What is Prime Number ? =>


function isPrime(num) {
  if (num < 2) {
    return false;
  } else if (num % 2 == 0) {
    return false;
  } else {
    return true;
  }
}

// console.log(isPrime(8)); //flase
// console.log(isPrime(6)); //false
// console.log(isPrime(3)); //true
// console.log(isPrime(7)); //true

let num = 7;
if (isPrime(num)) {
  console.log(` the given number ${num} is the prime number`);
} else {
  console.log(` the given number ${num} is not the prime number`);
}