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
        message: "What is the installation of the application?",
        name: "installation"
    },
    {
        type: "input",
        message: "What is the usage?",
        name: "usage"
    },
    {
        type: "list",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        name: "license"
    },
    {
        type: "input",
        message: "Credits?",
        name: "credits"
    },
    {
        type: "input",
        message: "What is the usage?",
        name: "usage"
    }
]).then(answers => {
    console.log(answers)

    let readme = " ";

    fs.writeFile("README.md", readme, err => {
        if (err) {
            return console.log(err)
        }
    })
})

