// set shapes and colors 

class Shape {

    // SHAPE COLOR

    constructor(color){
        this.color = color
    }
    setColor(color){
        this.color = color;
    }
}

    // TRIANGLE

    class Triangle extends Shape{
        render(){
            return `<polygon points = "150,1 244,152 50,150" fill="${this.color}"/>`;
        }
    }

    // SQUARE
    class Square extends Shape{
        render(){
            return `<rect x="50" y="0" width="200" height="200" fill="${this.color}"/>`
        }
    }


    // CIRCLE

    class Circle extends Shape{
        render (){
            return `<circle cx="150" cy="100" r="100" fill="${this.color}"/>`;
        }
    }

module.exports = { Circle, Square, Triangle };