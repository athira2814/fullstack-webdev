// returns the mkeys and values of object car
let car = {
    name : "class",
    manufacturer :"mercedes",
    print : function(){
    console.log( `${this.name} was manufactured by ${this.manufacturer}`)
    }
}
console.log(Object.values(car))
console.log(Object.keys(car))
// checks whether car has name in it and returns true
console.log(car.hasOwnProperty('name'))