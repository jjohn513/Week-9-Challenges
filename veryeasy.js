
var Exercise = function (exercise) {
    this.exercise = exercise;
}

Exercise.prototype.todaysExercise = function() {
    console.log(`Today we will be ${this.exercise}`)
}

let run = new Exercise ('running')
let swim = new Exercise ('swimming')

run.todaysExercise()
swim.todaysExercise()