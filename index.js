
// const input = document.querySelector('input')
// const button = document.querySelector('button')

// const getdata = async(item)=>{
//     console.log(item)
//     let url = `https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=${item}`
//     console.log(url)
//     const res = await fetch(url)
//     const data = await res.json()
//     console.log(data.hits)
// }
// button.addEventListener('click', (e)=>{
//     getdata(input.value)
// })
// object
const person = ({
    Name: "diya",
    age: "20",
    country: "India"
})

const {Name, age, country} = person 
console.log(Name, age, country)