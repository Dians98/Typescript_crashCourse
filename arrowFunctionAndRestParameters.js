/**
 * Rest parameter allow functions to accept any number of arguments as an array
 * Only one rest parameters per function
 * Must be the last parameter on the function
 */

function collectThings(x, ...y){
console.log(x);
console.log(y);
}
/**
 * X will be the first : 10
 * The rest will be an array on y : [2,3,4,5]
 */
collectThings(10,2,3,4,5)

const add= function(x,y) {
    return x + y
}

const addArrow = (x,y) => {
    return x + y
}
