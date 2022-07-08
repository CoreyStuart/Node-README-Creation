// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
    inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your github?',
      name: 'username',
    },

    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },

    {
        type: 'input',
        message: 'Whats your projects name?' ,
        name: 'project',
    },

    {
        type: 'input',
        message: 'Please have a short description of your project:' ,
        name: 'descrition',
    },

    {
      type: 'list',
      message: 'What kind of license should your project have?',
      choices: ['MIT', 'ISC', 'Mozilla Public License 2.0', 'LaTeX Project Public License v1.3c'],
      name: 'license',
    },

    {
      type: 'list',
      message: 'What command should be run to install dependencies?',
      choices: ['npm i'],
      name: 'dependencies',
    },

    {
        type: 'list',
        message: 'What command should be run to run tests?',
        choices: ['npm test'],
        name: 'test',
    },

    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'using',
    },

    {
        type: 'input',
        messsage: 'What does the user need to know about contributing to the repo?',
        name: 'contributing',
    }

  ]) .then((response) =>
  response.confirm === response.password
    ? console.log('Success!')
    : console.log('You forgot your password already?!')
);
// TODO: Create a function to write README file



// let data = questions.name;
// function writeToFile(fileName, data) {
//     fs.writeFile('README.md', data, utf8, (err))
// }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
