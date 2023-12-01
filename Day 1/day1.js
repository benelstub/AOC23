var fs = require("fs");

var input = fs.readFileSync("input.txt").toString().split("\n");

function dayOne() {
  let numArray = [];
  const numWord = [
    "oneight",
    "threeight",
    "nineight",
    "sevenine",
    "eightwo",
    "eighthree",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const numNum = [18, 38, 98, 79, 82, 83, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (i in input) {
    let str = input[i];
    //console.log(str1);

    for (let j = 0; j < numNum.length; j++) {
      str = str.replaceAll(numWord[j], numNum[j]);
    }
    //console.log(str1);

    const num = str.replace(/[^0-9]/g, "");
    const firstNum = num.substring(0, 1);
    const lastNum = num.substring(num.length - 1);

    const fl = firstNum + lastNum;

    numArray.push(Number(fl));
    ///console.log(numArray);
  }

  let sumNum = 0;

  for (let i = 0; i < numArray.length; i++) {
    sumNum += numArray[i];
  }

  console.log(sumNum);
}

dayOne();
