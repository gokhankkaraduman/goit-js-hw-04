function isEnoughCapacity(products, containerSize){
    let keysValue = 0;
    for(let key in products){
        keysValue+= products[key];
    }
    if(keysValue < containerSize){
        return true;
    }
    return false;
}

console.log(
    isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
  ); // true

console.log(
    isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
  ); // false

console.log(
    isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)
  ); // true

console.log(
    isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)
  ); // false

console.log(
    isEnoughCapacity({ apples: 488, potatos: 5, oranges: 2 }, 52)
  ); // false
console.log(
    isEnoughCapacity({ apples: 488, potatos: 5, oranges: 2 }, 5552)
  ); // false
