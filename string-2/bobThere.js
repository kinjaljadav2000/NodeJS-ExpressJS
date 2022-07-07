function bobThere(str){
   let len = str.length;
  for (let i = 0; i < len - 2; i++) {
    if (str.charAt(i) == 'b' && str.charAt(i+2) == 'b')
    return true;
  }
  return false;
}
}
