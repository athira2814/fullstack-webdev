// eg 1
let car = {
    name : "class",
    manufacturer :"mercedes"
}
console.log(car.name)
console.log(car.manufacturer)

// eg 2
let car = {
    name : "class",
    manufacturer :"mercedes",
    print : function(){
        console.log("bike")
    }
}
car.print()

// eg 3
let car = {
    name : "class",
    manufacturer :"mercedes",
    print : function(){
        console.log(car.name)
    }
}
car.print()

// eg 4
let car = {
    name : "class",
    manufacturer :"mercedes",
    print : function(){
        console.log(this)
        console.log(this.name)
    }
}
car.print()

// eg 5
let car = {
    name : "class",
    manufacturer :"mercedes",
    print : function(){
        console.log(this.name + ' was manufactured by ' + this.manufacturer)
    }
}
car.print()

// or 
let car = {
    name : "class",
    manufacturer :"mercedes",
    print : function(){
    console.log( `${this.name} was manufactured by ${this.manufacturer}`)
    }
}

// op undefined when pointer fn used
let car = {
    name : "class",
    manufacturer :"mercedes",
    print : ()=>{
    console.log(this) 
    // above line in arrow fn points to the window object but in normal fn it points to its parent
    console.log( `${this.name} was manufactured by ${this.manufacturer}`)
    }
}
car.print()


