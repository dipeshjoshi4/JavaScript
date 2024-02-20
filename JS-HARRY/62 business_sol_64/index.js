/*
create a business name generator by combining list of adjectives and shop name and another world

starting words(adjective)
crazy
amazing
fire

middle word 
engine 
food 
garements

ends with
bros
limited 
hub


*/

//make a random selector from each 3 catogeries

function start() {
  let start1 = "crazy";
  let start2 = "amazing";
  let start3 = "fire";
  let random = Math.random();

  if (random <= 0.33) {
    return start1;
  } else if (random > 0.33 && random < 0.66) {
    return start2;
  } else {
    return start3;
  }
}

function middle() {
  let middle1 = "engione";
  let middle2 = "food";
  let middle3 = "garments";
  let random = Math.random();

  if (random <= 0.33) {
    return middle1;
  } else if (random > 0.33 && random < 0.66) {
    return middle2;
  } else {
    return middle3;
  }
}

function end() {
  let end1 = "bros";
  let end2 = "limited";
  let end3 = "hub";
  let random = Math.random();

  if (random <= 0.33) {
    return end1;
  } else if (random > 0.33 && random < 0.66) {
    return end2;
  } else {
    return end3;
  }
}

function businessNameGenerator() {
  console.log(`${start()} ${middle()} ${end()}`);
}

businessNameGenerator();
