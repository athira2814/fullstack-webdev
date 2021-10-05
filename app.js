var arr =['one', 'two']

var callbackFunction = () =>{
    console.log('three')
}

arr.forEach(callbackFunction)

// printing all elements in array 
var arr =['one', 'two']

var callbackFunction = (index,element) =>{
    console.log(index,element)
}

arr.forEach(callbackFunction)

// using only forech

var arr =['one', 'two']
arr.forEach((ele,index)=>{
    console.log(ele,index)
}
)
