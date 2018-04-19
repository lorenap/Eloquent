

//Minimum
min = (firstNum, lastNum) => {
    return Math.min(firstNum, lastNum);   
}

//Recursion
isEven = (n) => {
    if (n == 0) {
        return true;
    }       
    else if (n == 1){
        return false;
    }        
    else if (n < 0){
        return isEven(-n);
    }         
    else {
        return isEven(n - 2);
    }
        
}

//Bean counting
countChar = (string, char) => {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == char) {
        count += 1;
      }
    }
    return count;
}
  
countBs = (string) => {
    return countChar(string, "B");
}