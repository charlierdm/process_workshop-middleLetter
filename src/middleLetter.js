const middleLetter = (word) => {
  let arr = word.split("");

  let halfLength = Math.floor(arr.length / 2);

  if(arr.length <= 2){
    return arr.join("");
  }
  else {
    return (arr.length % 2 === 0 ? arr[halfLength - 1].concat(arr[halfLength]) : arr[halfLength]);
  } 
};