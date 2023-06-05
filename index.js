 const inquirer = require('inquirer');
 const fs = require(fs);
 const generateMarkdown = require("./utils/generateMarkdown");

 const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
},
{
    type: 'input',
    name: 'description',
    message: 'Briefly, describe what your project is about',
},
{
    type: 'input',
    name: 'installation',
    message: 'How will you install your project?',
},
{
    type: 'input',
    name: 'use',
    message: 'How will you use your project?', 
},
{
    type: 'list',
    name: 'installation',
    message: 'enter the license chosen for the repo',
    choices:[
        'MIT', 'Apache', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None',
      ]
},
{
    type: 'input',
    name: 'github',
    message: 'Enter your github username',
},
{
    type: 'input',
    name: 'email',
    message: 'Enter your user email',
},
 ];

 function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
 }

 function init() {
    inquirer.prompt(questions)
    .then((response) => {
        writeToFile('README.md', generateMarkdown(response));
    })};

    init();