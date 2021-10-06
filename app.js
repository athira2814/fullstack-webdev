const a = document.querySelectorAll('input')[0]
const b = document.querySelectorAll('input')[1]
const add = document.querySelector('#add')
const multiply = document.querySelector('#multiply')
const resultbox = document.querySelector('.result')

// const sum = () =>{
//     const result = parseInt(a.value) + parseInt(b.value)
//     resultbox.innerHTML = result
// }
// const product= () =>{
//     const result = parseInt(a.value) * parseInt(b.value)
//     resultbox.innerHTML= result
// }
// add.addEventListener('click', sum )
// multiply.addEventListener('click' , multiply)

// -----another way------

const calculate=(event , operation)=>{
    switch(operation){
        case "add":
            resultbox.innerHTML=parseInt(a.value) + parseInt(b.value)
            break
        case "multiply":
            resultbox.innerHTML=parseInt(a.value) * parseInt(b.value)
            break
        default:
            resultbox.innerHTML="not a valid operation"
    }
}

add.addEventListener('click' ,(event)=>{
    calculate(event,'add')
})
multiply.addEventListener('click' ,(event)=>{
    calculate(event,'multiply')
})