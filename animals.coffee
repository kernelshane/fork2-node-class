alert = (msg) -> console.log(msg)

class Animal
    constructor: (@name) ->

    move: (meters) ->
        alert @name + " moved #{meters}m."

class Snale extends Animal
    move: ->
        alert "Slithering..."
        super 5

class Horse extends Animal
    move: ->
        alert "Galloping..."
        super 45

sam = new Snake "Sammy the Python"
tom = new Horse "Tommy the Palomino"

sam.move()
tom.move()
