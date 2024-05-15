const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Square, Circle} = require('./lib/shapes');

// class logic for putting together the shape and text

class Svg {
    constructor(){
        this.textElement = ""
        this.shapeElement = ""
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color){
        this.textElement = `<text x="150" y="175" font-size="90" text-anchor="middle" fill=${color}>${text}</text>`
    }
    setShapeElement(shape,color){
        shape.setColor(color)
        this.shapeElement = shape.render()
    }
}

// user questions
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter 3 characters for your logo',
        validate: (text) => 
            text.length == 3 || "Please enter 3 characters only",
    },
    {
        type: 'input',
        name: 'textcolor',
        message: 'Please enter the color for your 3 characters',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please select a shape:',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapecolor',
        message: 'Please enter the color for your shape',
    }
]

// fucntion to create file with user data
function writeToFile (fileName, data) {
    fs.writeFile (fileName, data, err => err ? console.log(err) : console.log("Generated logo.svg"));
}

// function to generate the logo per user's inputs/selections
function generateSvg(data){
    const svg = new Svg();
    
    // Set text element
    svg.setTextElement(data.text, data.textcolor);
    
    // Set shape element
    let shape;
    switch(data.shape){
        case 'Circle':
            shape = new Circle();
            break;
        case 'Triangle':
            shape = new Triangle();
            break;
        case 'Square':
            shape = new Square();
            break;
        // default:
        //     // Handle unexpected shape
        //     console.log("Unexpected shape selection");
            return;
    }
    svg.setShapeElement(shape, data.shapecolor);

    // Return the rendered SVG
    return svg.render();

}


// function to create a file using generateSvg 
function init (){
    inquirer.prompt(questions)
    .then(data => {
        writeToFile("logo.svg", generateSvg(data))
    })
}
// running the initialize function
init();