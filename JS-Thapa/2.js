// hastag genrator

//make a hastag from genral string given

//conditions
//1.each word is capta;lized and concated without spaces
//2.inputstring.length>280 || inputstring === " " => function return false
//3.genrate hastag prefix  with #

const generateHash = (str) => {

    if (str.length > 280 || str.trim().length === 0) {
        return false;
    } 

    str = str.split(' ');
    console.log(str[1].toUpperCase())


}

console.log(generateHash("my name is dipesh joshi")); //o/p -> #MyThapaTechnical