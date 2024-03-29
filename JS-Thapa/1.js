
//Question-1-find the longest word from the input string

//cond - whitspace ignore at start and end || and length will be not 0


const findlongestword = (str) => {
    if (str.trim().length === 0) {
        return false;
    }
    words = str.split(" "); //by space word differ
    words = words.sort((a, b) => b.length - a.length)
    return words[0];
}

console.log(
    findlongestword("Watch Thapa Technical javascript course on youtube")
)
