// functions
function add(a=0,b=0)
{
    var sum = a+b
    return sum
}
console.log(add(2,5))

// function expression
var add = function(a=0,b=0)
{
    var sum = a+b
    return sum
}
console.log(add(2,5))
// arrow function
var add =(a=0,b=0)=>
{
    var sum = a+b
    return sum
}
console.log(add(2,5))