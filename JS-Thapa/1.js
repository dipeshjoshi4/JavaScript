
//Question-1-find the longest word from the input string

//cond - whitspace ignore at start and end || and length will be not 0

//1st way

// const findlongestword = (str) => {
//     if (str.trim().length === 0) {
//         return false;
//     }
//     words = str.split(" "); //by space word differ
//     words = words.sort((a, b) => b.length - a.length)
//     return words[0];
// }

// console.log(
//     findlongestword("Watch Thapa Technical javascript course on youtube")
// )


//2nd way
const findlongestword = (str) => {
    if (str.trim().length === 0) {
        return false;
    }
    words = str.split(" ");
    return words.reduce(
        (acc, curvalue) => (curvalue.length > acc.length ? curvalue : acc), " "
    )
}

console.log(
    findlongestword(
        ("Watch Thapa Technical javascript course on youtube")
    )
);
