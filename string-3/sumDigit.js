function sumDigits(str){
    let add = (a, b) => a+b;
  let nums = []
  for (let i = 0; i < str.length; i++) {
    if (Number.isInteger(parseInt(str[i]))) {
        nums.push(parseInt(str[i]))
    }
  }
    if (nums.length != 0) {
      return nums.reduce(add);
    } else {
      return 0;
    }
}
