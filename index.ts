// Day 1

const input1 = [
  "1abc2",
  "pqr3stu8vwx",
  "a1b2c3d4e5f",
  "treb7uchet"
];

type ResultItem = {
  one: number;
  two: number;
}

const day1 = (input: string[]) => {
  let result: ResultItem[] = [];
  input.forEach(str => {
    result.push({
      one: parseInt(str.split("").find(c => !isNaN(parseInt(c))) || '0'),
      two: parseInt(str.split("").reverse().find(c => !isNaN(parseInt(c))) || '0'),
    });
  });
  let sum = 0;
  result.map(item => `${item.one}${item.two}`).forEach(item => sum += parseInt(item));
  console.log(sum);
}

//day1(input1);

// Day 2

const input2 = [
  "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
  "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
  "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
  "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
  "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
]

type Solution = {
  count: number;
  color: Color;
}

type Game = {
  id: number;
  games: GameItem[];
}

type GameItem = {
  color: Color;
  count: number;
}

enum Color {
  RED = "red",
  GREEN = "green",
  BLUE = "blue",
}

const solution: Solution[] = [
  { count: 12, color: Color.RED },
  { count: 13, color: Color.GREEN },
  { count: 14, color: Color.BLUE },
]

const day2 = (input: string[]) => {
  const result: number[] = [];
  input.forEach(str => {
    const id = str.split(":")[0].split(" ")[1];
    let isValid = true;
    str.split(":")[1].split(";").forEach(play => {
      play.trim().split(",").forEach(item => {
        const [count, color] = item.trim().split(" ");
        solution.forEach(item => {
          if (item.color === color as Color && item.count < parseInt(count)) {
            isValid = false;
          }
        })
      })
    })
    if (isValid) {
      result.push(parseInt(id));
    }
  })
  console.log(result.reduce((acc, curr) => acc + curr, 0));
}

day2(input2);