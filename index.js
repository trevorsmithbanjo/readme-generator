const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'title',
            name: 'title',
            message: 'What is the title of your project',
        }
    ])
    .then((userInput) => {
        const fileName = 'README.md';
        fs.writeFile(fileName, `# ${userInput.title}`, (err) =>
            err ? console.log(err) : console.log('README Sucessfully Generated!'));
    });
