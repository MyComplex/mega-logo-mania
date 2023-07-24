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
            name: 'initials-color',
            message: 'Enter the color of your logo letters:',
            default: '#a5acaf'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select the shape to display on your logo.',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            name: 'shape-color',
            message: 'Enter the color of your logo shape:',
            default: '#004c54'
        }
    ])
    .then((answers) => {
        /* Write to logo.svg file */
        fs.writeFileSync('logo.svg', `
        <svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>

        </svg>
        `);
    })
    .catch(err => {
        console.log('An error occurred: ' + err);
    });