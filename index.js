let Name = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('athira')
    },3000)
})
// console.log(Name)
// setTimeout(()=>{
//     console.log(Name)
// },4000)

// '.then' automatically executes once the promise resolves or rejects

Name.then(data=>{console.log(data)})