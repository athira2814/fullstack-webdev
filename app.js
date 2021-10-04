var list = document.querySelector('ul')
console.log(list)
var arr=['go to the gym','cook oatmeal', 'eat']
arr.push('completed assignment')
for(var i =0; i< arr.length; i++)
{
    var element= document.createElement('li')
    var textnode= document.createTextNode(arr[i])
    element.appendChild(textnode)
    list.appendChild(element)
}
// manually appending list elems using js