 const inquirer = require('inquirer');
 const fs = require('fs');
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
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your README.md file has been generated")
    });
}




// Main function
async function init() {
    try {

        // Prompt Inquirer questions
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Thank you for your responses! Fetching your GitHub data next...");
    
        // Call GitHub api for user info
        const userInfo = await api.getUser(userResponses);
        console.log("Your GitHub user info: ", userInfo);
    
        // Pass Inquirer userResponses and GitHub userInfo to generateMarkdown
        console.log("Generating your README next...")
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);
    
        // Write markdown to file
        await writeFileAsync('ExampleREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

init();