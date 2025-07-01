const cycledfunc = () => {
  let input = 0;
  for (let i = 1; i < 11; i++) {
    input = prompt(`Enter number that > 100 attempt ${i}/10`);
    if (input === null || input === undefined) {
      console.log('You cancelled');
      return;
    }
    input = Number(input);
    if (input <= 100) {
      console.log('Too small number, try again');
    }
    if (isNaN(input)) {
      console.log('Its not a number, try again');
    }
    if (input > 100) {
      console.log(`Correct input, your input is ${input}`);
      break;
    }
    if (i === 10) {
      console.log('You failed all attempts');
      console.log(`${input} is your last input`);
    }
  }
  return input;
};

cycledfunc();
