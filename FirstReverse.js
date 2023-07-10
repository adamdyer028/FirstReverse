function FirstReverse(str) { 
  let newStr = "";

for (let i=str.length - 1; i > -1; i--) {
  //console.log(newStr);
  //console.log(str[i]);
  newStr += str[i]; 
}
  return newStr; 
}
 
// keep this function call here 
console.log(FirstReverse(readline()));