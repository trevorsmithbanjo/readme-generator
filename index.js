const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project description?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How is your project installed?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is your project used?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How does someone contribute to your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the tests to run?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license does the project use?',
        choices: ['Apache2.0', 'GNUv3.0', 'MIT']
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.'
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your github username.'
    },
    {
        type: 'input',
        name: 'year',
        message: 'What is the copywrite year?'
    },
    {
        type: 'input',
        name: 'fullName',
        message: 'Enter your full name.'
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err =>
        err ? console.log(err) : console.log('Success!'))
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile('README.md', data)
        })
}

// function call to initialize program
init();
