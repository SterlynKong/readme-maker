// require the fs module interact with the file system (writeFiles)
const fs = require("fs");

// //path allows additional uses and built into js node
// const path = require("path");

// require inquirer to prompt users for input
const inquirer = require("inquirer");

// require generareMerdown to build README.md file
const generateMarketdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your github username?"
  },
  {
    type: "input",
    name: "email",
    message: "Please provide your email address:"
  },
  {
    type: "input",
    name: "proj_title",
    message: "What is the title of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a short project description:"
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?"
  },
  {
    type: "list",
    name: "license",
    message: "Select a license:",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
  },
  {
    type: "input",
    name: "test",
    message: "What is the command to run tests?"
  },
  {
      type: "input",
      name: "url",
      message: "Please provide the URL of the deployed application (where applicable):"
  },
  {
    type: "input",
    name: "img",
    message: "Please provide a path to a screenshot / image of the application:"
  },
  {
    type: "input",
    name: "contributing",
    message: "Please describe how users can contribute to this project:",
    default: "Contact via GitHub or email for permission to contribute!"
  }

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(('./dist/' + fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses) => {
        console.log("Generating README...");
        writeToFile("README.md", generateMarketdown({...inquirerResponses}));
    })
}

// function call to initialize program
init();
