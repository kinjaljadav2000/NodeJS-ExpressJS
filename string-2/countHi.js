function countHi(str){
    count = 0;
  for (i = 0; i < str.length - 1; i++) {
    if (str.substring(i, i + 2) == "hi") count++;
  }
  return count;
}
