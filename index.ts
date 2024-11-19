// Day 1

const input = [
  "1abc2",
  "pqr3stu8vwx",
  "a1b2c3d4e5f",
  "treb7uchet"
];

type ResultItem = {
  one: number;
  two: number;
}

let result: ResultItem[] = [];

const findResult = (input: string[]) => {
  input.forEach(str => {
    result.push({
      one: parseInt(str.split("").find(c => !isNaN(parseInt(c))) || '0'),
      two: parseInt(str.split("").reverse().find(c => !isNaN(parseInt(c))) || '0'),
    });
  });
};

findResult(input);

let sum = 0;

result.map(item => `${item.one}${item.two}`).forEach(item => sum += parseInt(item));

console.log(sum);