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

    .then(function(userData){
        
        const username = userData.username;
        const title = userData.title;
        const describe = userData.describe;
        const installation = userData.installation;
        const usage = userData.usage;
        const license = userData.license;
        const contributing = userData.contributing;
        const tests = userData.tests;
        const questions = userData.questions;
        const queryUrl = "https://api.github.com/users/" + username + "?client_id=97a1c6e2ed987f6f6a0a&client_secret=fa47f739052bee5423f399ca913e50a23ffd629e";
        axios.get(queryUrl).then(function(res) {
            const myPic = res.data.avatar_url;
            const email = res.data.email;
        }
        )});