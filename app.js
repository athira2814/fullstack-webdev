var arr=[1,2,3,4,5,6,7,8]
arr.push(9)
// add the ele at the end
arr.unshift(12)
// add the ele at the beginning
arr.shift(9)
// removes first ele
var new_arr =[]
new_arr.slice(2,5)
// slice the array and returns duplicate array
var new_arr= arr.filter((element,index)=>{
    if(element%2===0)
        return true

})
console.log(arr)
console.log(new_arr)