var heading = document.getElementById('heading')
var para = document.getElementsByClassName('para')
var tags = document.getElementsByTagName('h1')
var query = document.querySelector('#heading')

console.log(heading)
console.log(para)
//----- Here class para is similar to an array-----.
console.log(para[0])
// returns the first para element
console.log(para[1])
// returns the next element with class para
console.log(para.length)
// returns length and gives the specified element just like array but cannot add element into array and also other some array operations cannot be performed
console.log(tags)
console.log(query)