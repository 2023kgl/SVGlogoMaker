const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./lib/shapes');

// const { default: Choice } = require('inquirer/lib/objects/choice');
// this automatically added when i added line 23 ....? commenting out for now


const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter 3 characters for your logo',
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

function createFile (fileName, data) {
    fs.writeFile (fileName, data, err => err ? console.log(err) : console.log("Generated logo.svg"));
}

function init (){
    inquirer.prompt(questions)
    .then(data => {
        createFile("logo.svg", generateLogo(data))
    })
}

init();