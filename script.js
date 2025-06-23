function convertToRoman(num) {

  const resultArr=[]
  while(num>0){
    let digit=num%10
    resultArr.push(digit)
    num=Math.floor(num/10)
  }
  resultArr[0]=unitPlace(resultArr[0])
  resultArr[1]=tenPlace(resultArr[1])
  resultArr[2]=hundredsPlace(resultArr[2])
  resultArr[3]=thousandsPlace(resultArr[3])
  const finalResult=(resultArr.reverse().join(''))
  
  
  
  function unitPlace(num){
    let unitStr=''
    if(num===4)unitStr='IV'
    else if(num===9)unitStr='IX'
    else if(num>=5&&num<10){
      unitStr='V'
      for(let i=0;i<num-5;i++){
        unitStr+='I'
      }
    }
    else{
    for(let i=1;i<=num;i++){
      unitStr+='I'
    }
    }
    return unitStr
  }
  //units place done

  function tenPlace(num){
    let tenStr=''
    if(num===4)tenStr='XL'
    else if(num===9)tenStr='XC'
    else if(num>=5&&num<10){
      tenStr='L'
      for(let i=0;i<num-5;i++){
        tenStr+='X'
      }
    }
    else{
    for(let i=1;i<=num;i++){
      tenStr+='X'
    }
    }
    return tenStr
  }
  //tens place done

  function hundredsPlace(num){
    let hundredStr=''
    if(num===4)hundredStr='CD'
    else if(num===9)hundredStr='CM'
    else if(num>=5&&num<10){
      hundredStr='D'
      for(let i=0;i<num-5;i++){
        hundredStr+='C'
      }
    }
    else{
    for(let i=1;i<=num;i++){
      hundredStr+='C'
    }
    }
    return hundredStr
  }
  //hundreds place done

  function thousandsPlace(num){
    let thousandsStr=''
    for(let i=1;i<=num;i++){
      thousandsStr+='M'
    }
    return thousandsStr
  }
  return finalResult
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
