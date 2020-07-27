//dato un numero, visualizzar eil suo fattoriale (ad esempio 5-> 5*4*3*2*1 = 120)

function factorialize1(num){
  let fattoriale = num
  
  for(let i = num-1; i > 1; i--){
    fattoriale *= i
  }

  return fattoriale

}

// un metodo ricorsivo
function factorialize2(num){
  
  let i = num;
  return factorializeRec(num, i)

  function factorializeRec(num, i){
    i--
    if(i < 2) return num
    
    num *= i
    
    return factorializeRec (num, i)
  }

}

let number = 6
document.write(factorialize2(number))