/** Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.*/

//SOLUTION 1
function mutation(arr) {
  let str1 = arr[0].toLowerCase();
  let str2 = arr[1].toLowerCase();

  for (let i = 0; i < str2.length; i++){
   if (!str1.includes(str2[i])){
     return false;
   }
  }
  return true;
}

//SOLUTION 2
function mutation2(arr) {
  let str1 = arr[0].toLowerCase();
  let str2 = arr[1].toLowerCase();
  const hash = {}

  for (let char of str1) {
    hash[char] = true
  }
  
  for (let char of str2) {
    if(!hash[char]) {
      return false
    }
  }
  
  return true;
}

mutation(["Mary", "Aarmy"]);