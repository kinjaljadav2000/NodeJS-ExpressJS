function countTriple(str){
   let count = 0;

  for (let i = 0; i <= str.length-2; i++) {
    let triple = str.substring(i, i+3);
    if (triple[0] == triple[1] && triple[1] == triple[2]){
      count += 1;
    }
  }
  return count;
}
