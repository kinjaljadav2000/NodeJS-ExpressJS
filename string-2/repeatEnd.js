function repeatEnd(str, n){
   let repStr = "";
  let sub = str.substring(str.length - n);
    while (n != 0) {
        repStr += sub;
        n--
    }
    return repStr; 
}
}
