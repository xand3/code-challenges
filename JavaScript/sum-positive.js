// Sum of positive

function positiveSum(arr) {
  return arr.reduce((acc, e) => {
    return e >= 0 ? acc + e : acc += 0;
  }, 0)
}