function repeatFront(str, n){
   len = str.length;
newWord = "";
  for ( i = n; n > 0; n--){
    newWord += str.substring(0,n);
  }
  return newWord;
}
