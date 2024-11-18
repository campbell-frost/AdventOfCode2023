const input = [
  "1abc2",
  "pqr3stu8vwx",
  "a1b2c3d4e5f",
  "treb7uchet"
];

((input: string[]) => {
  input.forEach((str) => {
    console.log(str);
  });
})(input);
