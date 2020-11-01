// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();


// require the fs module interact with the file system (writeFiles)
const fs = require("fs");

//path allows additional uses and built into js node
const path = require("path");

// require inquirer to prompt users for input
const inquirer = require("inquirer");

// require generareMerdown to build README.md file
const generateMarketdown = require("./utils/generateMarkdown");

// array of questions for user
const prompts = [
  {
    type: "input",
    name: "github",
    message: "What is your github username?"
  },
  {
    type: "input",
    name: "email",
    message: "Please provide your email address."
  },
  {
    type: "input",
    name: "proj_title",
    message: "What is the title of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a short project description."
  },
  {
    type: "list",
    name: "license",
    message: "Select a license:",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
    deafault: "npm install"
  },
  {
      type: "input",
      name: "app_url",
      message: "Please provide the URL of the deployed application (where applicable):",
      deafault: "N/A"
  },
  {
    type: "input",
    name: "usage",
    message: "What are the rules regarding usage?"
  },
  {
    type: "input",
    name: "how_to_contribute",
    message: "Please describe how users can contribute to this project:",
    deafault: "Contact via GitHub or email for permission to contribute!"
  }

];



// function call to initialize program
init();
