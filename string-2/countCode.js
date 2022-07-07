function countCode(str){
  let count = 0;  
    for(let i = 0; i < str.length - 3; i++) {
        if(str.substring(i, i + 2)==("co") && str.charAt(i + 3) == 'e')
            count++;
    }    
    return count;
}
}
