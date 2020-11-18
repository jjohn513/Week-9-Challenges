var Pizza = function (type, people){
    
    this.type = type
    this.slices = 8
    this.people = people

    this.sharePizza = function(people) {
        return this.slices / this.people
    }

}

Pizza.prototype.calculateSlices = function () {
    console.log(`Each person will get ${this.sharePizza()} slices of ${this.type} pizza`)
}

let userPizza = (prompt("What kind of Pizza would you like?"))

let userHeadCount = parseInt(prompt("How many people are there with you (Anything less than 2 is not valid, it means you have no friends :(  )"))



if (userHeadCount < 2) {
    console.log(`Error, you entered in a value less than 2 (I thought we talked about this?)`)
} else {
    let newPizza = new Pizza (userPizza, userHeadCount)
    newPizza.calculateSlices()
}