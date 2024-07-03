let express = require("express");
let app = express();
let port = 3000;
app.listen(port, () => {
  console.log(`The server listening at http://localhost:${port}`);
});

//1
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterEvenNumbers(ele) {
  return ele % 2 === 0;
}
app.get("/even-numbers", (req, res) => {
  let result = numbers.filter((ele) => filterEvenNumbers(ele));
  res.json(result);
});
//even-numbers

//2
let ages = [10, 20, 30, 15, 17, 25];
function filterAges(ele) {
  return ele > 18;
}
app.get("/adult-ages", (req, res) => {
  let result = ages.filter((ele) => filterAges(ele));
  res.json(result);
});
//adult-ages

//3
let words = ["apple", "banana", "cherry", "date", "fig", "grape"];
function filterLongWords(ele, filterParam) {
  return ele.length > filterParam;
}
app.get("/long-words", (req, res) => {
  let result = words.filter((ele) => filterLongWords(ele, 5));
  res.json(result);
});
//long-words
//long-words?filterParam=5//req.query.filterParam

//4
let fileSizes = [50, 200, 75, 120, 30, 90, 150];
function filterSmallFiles(ele, filterParam) {
  return ele < filterParam;
}
app.get('/small-files', (req, res) => {
  let filterParam = parseFloat(req.query.filterParam);
  let result = fileSizes.filter(ele => filterSmallFiles(ele, filterParam));
  res.json(result);
});
//small-files?filterParam=100