function mixString(a, b){
   let aLen = a.length;
  let bLen = b.length;
  let max = Math.max(aLen, bLen);
  let word = "";
  for (let i = 0; i < max; i++) {
    if (i <= aLen-1)
      word += a.substring(i,i+1);
    if (i <= bLen-1)
      word += b.substring(i,i+1);
  }
  return word;
}
}
