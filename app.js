
var button = document.querySelector('button')
var input = document.querySelector('input')
var list = document.querySelector('ul')

const callbackfunction = (event) =>{
    const inputvalue= input.value
    const element = document.createElement('li')
    const textnode = document.createTextNode(inputvalue)
    element.appendChild(textnode)
    list.appendChild(element)
    // console.log(event.target)
    // console.log(input.value)
}

button.addEventListener('click', callbackfunction)

// console.log(event.target) - shows the actual element in which the event occured in console
// console.log(input.value) - shows the values entered in the input field in console
