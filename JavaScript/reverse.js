// Convert number to reversed array of digits

function digitize(n) {
  const arrN = Array.from(String(n), Number);
  return arrN.reverse();
}