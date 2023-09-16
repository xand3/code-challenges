// Split Strings
function solution(str){
  if(str == "") {
    return []
  } else if(str.length % 2 == 0) {
    return str.match(/(.{2})/g)
  } else {
    str += "_"
    return str.match(/(.{2})/g)
  }
}

// Split Strings with regular expressions
function solutionRgx(s){
  return (s+"_").match(/.{2}/g)||[]
}