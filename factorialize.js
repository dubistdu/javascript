
function factorialize(num) {
 if (num === 0 || num === 1)
  return 1;

  for (var n=num-1; n>=1 ; n--) {
    num *= n
  }

  return num;
}

factorialize(5);
