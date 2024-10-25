let numOrStr = prompt('input number or string');
console.log(numOrStr)

/** If Else */
if (numOrStr === null) {
  console.log('You cancelled')
} else if (numOrStr.trim() === '') {
  console.log('Empty String');
} else if (isNaN(+numOrStr)) {
  console.log(' number is Ba_NaN')
} else {
  console.log('OK!')
}

/** Switch case */
switch(true) {
  case numOrStr === null:
    console.log('You cancelled');
    break;
  case numOrStr.trim() === '':
    console.log('Empty String');
    break;
  case isNaN(+numOrStr):
    console.log('number is Ba_NaN');
    break;
  default:
    console.log("OK!");
}