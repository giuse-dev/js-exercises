//data una stringa, stampare la stringa inversa

let s = 'giuseppe'

// senza usare soluzioni già pronte
function reverseString(str){
  let array = str.split('')
  let reversedString = ''
  
  for(let i = array.length -1; i >= 0; i--){
    reversedString += array[i]
  }

  return reversedString
}

//utilizzando soluzioni già pronte
function reverseString2(str){

  let arr = str.split('')
  let reversedArr = arr.reverse()
  let reversedStr = reversedArr.join('')

  return reversedStr
}

document.write(reverseString(s))