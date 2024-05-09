// set shapes and colors 

class Shape {

    // SHAPE COLOR

    constructor(){
        this.color = "";
    }
    setColor(color){
        this.color = color;
    }
}

    // TRIANGLE

    class Triangle extends Shape{
        render(){
            return `<polygon points = "150, 18 244, 182 56, 182" fill="${this.color}"/>`;
        }
    }

    // SQUARE
    class Square extends Shape{
        render(){
            return `<rect x="100" y="50" width="300" height="300" fill="${this.color}"/>`
        }
    }


    // CIRCLE

    class Circle extends Shape{
        render (){
            return `<circle cx="25" cy="75" r="20" fill="${this.color}"/>`;
        }
    }
    
// set text and text color




module.exports = { Circle, Square, Triangle };