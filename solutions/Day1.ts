type ResultItem = {
  one: number;
  two: number;
}

export default function day1(input: string[]) {
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
