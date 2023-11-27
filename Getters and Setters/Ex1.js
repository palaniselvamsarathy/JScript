class Circle{
    constructor(radius){
        this.radius = radius
    }
    get diameter(){
        return 2*this.radius
    }
    set diameter(diameter){
        this.radius = diameter/2
        // return this.radius
    }
    get area(){
        return Math.PI * this.radius * this.radius//Math.pow(this.radius,2)
    }
}

let c1 = new Circle(12)

console.log(c1.diameter)

// c1.diameter = 24
// console.log(c1.diameter)

console.log(c1.area)