/* Import dependencies */
const inquirer = require('inquirer');
const inquirerMaxLengthInput = require('inquirer-maxlength-input-prompt');
const fs = require('fs');

/* Import classes */
const { Circle, Triangle, Square } = require('./lib/logoComponents');

/* Register maxlength-input prompt */
inquirer.registerPrompt('maxlength-input', inquirerMaxLengthInput);

/* Prompt for user input */
inquirer
    .prompt([
        {
            type: 'maxlength-input',
            name: 'letters',
            message: 'Enter up to three logo letters:',
            maxLength: 3,
            default: 'STS'
        },
        {
            type: 'input',
            name: 'letterColor',
            message: 'Please enter the color of your logo letters by either a keyword such as "blue" or a hex value such as "#0000ff":',
            default: '#a5acaf'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select the shape to display on your logo.',
            choices: ['Circle', 'Triangle', 'Square'],
            default: 'Circle'
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Please enter the color of your logo shape by either a keyword such as "green" or a hex value such as "#008000":',
            default: '#004c54'
        }
    ])
    .then((answers) => {
        if (answers.shape === 'Circle') {
            genLogo = new Circle(answers.shapeColor, answers.letters, answers.letterColor);
        }
        else if (answers.shape === 'Triangle') {
            genLogo = new Triangle(answers.shapeColor, answers.letters, answers.letterColor);
        }
        else {
            genLogo = new Square(answers.shapeColor, answers.letters, answers.letterColor);
        }
        
        /* Write to logo.svg file */
        fs.writeFile('./examples/logo.svg', genLogo.renderLogo(), (err) => {
            err ? console.log(err) : console.log('Generated logo.svg');
        });
    })
    .catch(err => {
        console.log('An error occurred: ' + err);
    });