const table = document.querySelector('table')
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=>{
        // console.log(data)
        data.forEach(user => {
            let newrow = document.createElement('tr')
            // let dataID = document.createElement('td')
            // let dataIDtextnode = document.createTextNode(user.id)
            // dataID.appendChild(dataIDtextnode)
            // newrow.appendChild(dataID)
            let elem = ` 
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.username}</td>`
            newrow.innerHTML= elem            
            table.appendChild(newrow)
        });
})