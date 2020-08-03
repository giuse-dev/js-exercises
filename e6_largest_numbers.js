//dato un array di array contenenti numeri,
//deve essere restituito un numero per array, il più alto
//esempio: [ [2,34], [16,3], [2, 4 , 11, 0, 2] ] => [34,16,11]

function largestNumbers(arr){
  
  let largestNumbers = []

  let currentMax
  for(let i = 0; i< arr.length; i++){

    currentMax = arr[i][0]

    for(let j = 1; j< arr[i].length; j++){
      
      let currentNumber = arr[i][j]
      if(currentNumber > currentMax){
        currentMax = currentNumber
      }

    }

    largestNumbers.push(currentMax)


  }

  return largestNumbers
}

console.log(largestNumbers([ [4, 1, 67], [12, 6, 8], [21, 35, 1], [35, 18, 88], [1, 0] ]))