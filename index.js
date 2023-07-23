// IMPORT DEPENDENCIES
const inquirer = require('inquirer');
const inquirerMaxLengthInput = require('inquirer-maxlength-input-prompt');
const fs = require('fs');

//IMPORT CLASSES
const { Circle, Triangle, Square } = require('./lib/shapes');

/* PROMPT FOR USER INPUT */
inquirer
    .prompt([
        {
            type: 'maxlength-input',
            name: 'initials',
            message: 'Enter your logo initials:',
            default: 'STS'
        },
        {
            type: 'input',
            name: 'initials-color',
            message: 'Enter the color of your logo initials:',
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
            name: 'shape-color',
            message: 'Enter the color of your logo shape:',
            default: '#004c54'
        }
    ])
    .then((answers) => {
        /* WRITE TO README.md FILE */
        fs.writeFileSync('logo.svg', `
        `);
    })
.catch(err => {
console.log('An error occurred: ' + err);
});