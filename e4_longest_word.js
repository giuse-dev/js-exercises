//data una frase, restituire la parola piu lunga

function getLongestWord(str){
  let array = str.split(" ")

  let longestWord = array[0];
  
  for(let i = 1; i < array.length; i++){
    let currentWord = array[i]
    if(currentWord.length > longestWord.length){
      longestWord = currentWord
    }

  }

  return longestWord

}

console.log(getLongestWord("proviamo a dare questa frase per vedere il risultato"))