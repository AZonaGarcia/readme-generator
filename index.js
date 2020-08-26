var inquirer = require("inquirer");
var fs = require("fs")


inquirer.prompt([
    {
        type: "input",
        message: "What is the title of the project",
        name: "title"
    },
    {
        type: "input",
        message: "What is the description of the project?",
        name: "description"
    },
    {
        type: "input",
        message: "What are the installation instructions?",
        name: "installation"
    },
    {
        type: "input",
        message: "What is the usage information?",
        name: "usage"
    },
    {
        type: "list",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        name: "license"
    },
    {
        type: "input",
        message: "What are the contribution guidelines?",
        name: "contributing"
    },
    {
        type: "input",
        message: "What are the testing instructions?",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    }
]).then(answers => {
    console.log(answers)

    let readme =
`# ${answers.title}
# ${answers.license}

## Description
${answers.description}

## Table Of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)

## Questions
* [Username](${answers.username})
* [Email](${answers.email})

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}`



    fs.writeFile("README.md", readme, err => {
        if (err) {
            return console.log(err)
        }
    })


})

