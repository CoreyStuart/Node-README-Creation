// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input



// TODO: Create a function to write README file



// let data = questions.name;
 function writeToFile(fileName, data) {
     const response = generateMarkdown(data);
   fs.writeFile('README.md', response, 'utf8', (err) => 
   err ? console.error(err) : console.log('Success!'))
 };



// TODO: Create a function to initialize app
function init() { 
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
          name: 'title',
      },
  
      {
          type: 'input',
          message: 'Please have a short description of your project:' ,
          name: 'description',
      },
  
      {
        type: 'list',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'ISC', 'Mozilla Public License 2.0', 'LaTeX Project Public License v1.3c'],
        name: 'license',
      },
  
      {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
        name: 'dependencies',
      },
  
      {
          type: 'input',
          message: 'What command should be run to run tests?',
          default: 'npm test',
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
  
    ]).then((response) => {
        writeToFile('README.md', response);
    });
}

// Function call to initialize app
init();
