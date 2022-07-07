function countYZ(str){
   let count=0;
  for (let i = 0; i < str.length; i++) {
    if (!str[i].match(/[a-z]/i) || str.charAt(i) == " ") {

        if (str.charAt(i-1).toLowerCase() == "y" || str.charAt(i-1).toLowerCase() == "z"){
        count += 1;
      }
    }
    if (i == str.length-1) {
        if (str.charAt(i).toLowerCase() == "y" || str.charAt(i).toLowerCase() == "z"){
        count += 1;
      }
    }
  }
  return count;
}
