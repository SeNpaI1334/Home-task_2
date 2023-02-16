const DESCRIPTION = 'Введите число';
const result = (mafirstNum, mid, min) => alert(`${mafirstNum}, ${mid}, ${min}`)
/*   function result(mafirstNum, mid, min) {
      return alert(`${mafirstNum}, ${mid}, ${min}`) 
  } */

/*    let result = function(mafirstNum, mid, min) {
       return alert(`${mafirstNum}, ${mid}, ${min}`) 
   } */
let firstNum = +prompt(DESCRIPTION)
let secondNum = +prompt(DESCRIPTION)
let thirdNum = +prompt(DESCRIPTION)

if (firstNum >= secondNum && firstNum >= thirdNum && secondNum >= thirdNum) {
    result(firstNum, secondNum, thirdNum)

} else if (secondNum >= firstNum && secondNum >= thirdNum && thirdNum >= firstNum) {
    result(secondNum, thirdNum, firstNum)
}
else if (thirdNum >= firstNum && thirdNum >= secondNum && firstNum >= secondNum) {
    result(thirdNum, firstNum, secondNum)
}
else if (firstNum >= secondNum && firstNum >= thirdNum && thirdNum >= secondNum) {
    result(firstNum, thirdNum, secondNum)

} else if (secondNum >= firstNum && secondNum >= thirdNum && firstNum >= thirdNum) {
    result(secondNum, firstNum, thirdNum)
}
else if (thirdNum >= firstNum && thirdNum >= secondNum && secondNum >= firstNum) {
    result(thirdNum, secondNum, firstNum)
}