const readline = require("readline");
const fs = require("fs");

var input = [];
var output = [];
const result = [];

const rl = readline.createInterface({
  input: fs.createReadStream("exo2/input3.txt"),
  crlfDelay: Infinity
  //output: process.stdout
});

const rlout = readline.createInterface({
  input: fs.createReadStream("exo2/output3.txt"),
  crlfDelay: Infinity
  //output: process.stdout
});

rl.on("line", value => {
  //Read input values
  input.push(value);
});

//Call ContestResponse when all inputs are read
rl.on("close", contestResponse);

rlout.on("line", value => {
  //Read input values
  output.push(value);
});
rlout.on("close", resultResponse);

function contestResponse() {
    // TODO CODE
  result.push("");
}

function resultResponse() {
  console.log("#############");
  console.log(output.map((r,index) => {
    return result[index] == r;
  }).join('-'));
}
