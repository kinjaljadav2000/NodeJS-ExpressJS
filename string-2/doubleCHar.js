function doubleChar(str){
    let l = "";
    for (let i = 0; i <=str.length-1;i++) {
           l += str.charAt(i);
           l += str.charAt(i); }
           return l;
}
