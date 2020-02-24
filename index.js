const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt([{
        message: "Enter your GitHub username:",
        name: "username"
        },
    {
        message: "Enter the title of your project:",
        name: "title"
        },
    {
        message: "Description of your project:",
        name: "description"
        },
    {
        message: "Installation:",
        name: "installation"
        },
    {
        message: "Usage:",
        name: "usage"
        },
    {
        message: "License:",
        name: "license"
        },
    {
        message: "Contributing:",
        name: "contributing"
        },
    {
        message: "Tests:",
        name: "tests"
        },
    {
        message: "Questions:",
        name: "questions"
        }   
    ])
   