const fetchdata = async ()=>{
    const respose = await fetch('https://jsonplaceholder.typicode.com/users')
    console.log(respose)
    const data = await respose.json()
    console.log(data)
}
fetchdata()