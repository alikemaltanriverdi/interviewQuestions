// Input: money / denom[]
// Return: [] or false
// Affect: None
function amountToCoins(money, denom){
    //In order to check if all of the given denominations are valid positive integers
    if (denom.every(function(val) {return val > 0;}) && money > 0) {
      
      //Creating a new array to hold the valid denominations
      let newArr = [];
        let i = 0;

        //To sort the denominator array in decending order
        denom.sort(function(a, b) {
          return b - a;
        }); 

      while (money > 0) { //Amount validation
        if (money - denom[i] >= 0) { // Substraction validation
          money -= denom[i];
          newArr.push(denom[i]);
        } else {
          i++;
        }
      }
      return newArr;
    }
    return false;
}

//Please provide the denom array and the money vars to the function
var den = [25,10, 5, 2, 1];
console.log(amountToCoins(46,den));