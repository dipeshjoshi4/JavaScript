const isReverse = (str) => {
  let reverse = "";
  for (let char = str.length - 1; char >= 0; char--) {
    reverse = reverse + str[char]
  }
  return reverse
}
console.log(isReverse("hardik"));