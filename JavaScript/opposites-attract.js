//Opposites Attract

function lovefunc(flower1, flower2) {
  const isEven = (x) => (x % 2 == 0 ? true : false);
  switch (true) {
    case isEven(flower1) && !isEven(flower2):
      return true;
    case !isEven(flower1) && isEven(flower2):
      return true;
    default:
      return false;
  }
}
