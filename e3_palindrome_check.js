//restituisce true se la string fornita è palindroma
//(ignora spazi e case)


//usando soluziioni già pronte
function isPalindrome(str){
  
  str = str.toLowerCase()
  
  let arr = str.split('');  
  arr = arr.filter(letter => letter!= " ")

  let string1 = arr.join('');

  let arr2= [...arr]
  let reversedArray = arr2.reverse();

  let reversedString = reversedArray.join('');
  return reversedString === string1

}

//non usando soluzioni pronte
function isPalindrome2(str){

  str = str.toLowerCase()

  let arr1 = str.split('')
  arr1 = arr1.filter( letter => letter !== ' ')

  let string1 = arr1.join('')
  
  let arr2 = []
  for(let i = 0; i < arr1.length; i++){
    arr2.unshift(arr1[i])
  }

  let reversedString = arr2.join('')
  
  return string1 === reversedString
}

console.log(isPalindrome2('i topi non avevano nipoti'));
console.log(isPalindrome2('Ero a dirottar trattori da ore'));
console.log(isPalindrome2('Era pacifica pare'));
console.log(isPalindrome2('E le tazzine igienizzatele'));
console.log(isPalindrome2('questa non è palindroma'));
console.log(isPalindrome2('questa neanche'));