// let is also used to declare a variable
// gives error because let has block scope
if(true){
    let Name ="ethan"
}
console.log(Name)

// prints ethan because var has global scope
if(true){
    var Name = "ethan"
}
console.log(Name)

// prints hai
if(true){
    var Name ="hai"

    if (true){
        console.log(Name)
    }
}
// gives error
if(true){
    console.log(Name)

    if (true){
        var Name ="hai"
    }
}