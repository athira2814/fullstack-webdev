const button = document.querySelector('.btn')
const body = document.querySelector('body')
const input = document.querySelector('input')
const addbtn = document.querySelector('addbtn')
const list = document.querySelector('ul')

// var arr=[]
// const callbackfunc= (event)=>{
//     console.log(input.value)
//     const inputvalue = input.value
//     if (arr.includes(input.value)){
//         console.log("Already exists")
//     }
//     else {
//         arr.push(inputvalue)
//         const element = document.createElement('li')
//         const textnode = document.createTextNode(inputvalue)
//         element.appendChild(textnode)
//         list.appendChild(element)
//         element.addEventListener('click', (e)=>{console.log(e.target.innerHTML)})
//     }
// }
// addbtn.addEventListener('click', callbackfunc)

const darkfunction = (() =>{
    body.classList.toggle('dark')
})
button.addEventListener('click',darkfunction)