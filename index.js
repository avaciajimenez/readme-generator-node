const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = (answers) =>
  `# ${answers.title}
## Description
${answers.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
${answers.install}
## Usage
${answers.usage}
## Credits
${answers.contributors}
## License
${answers.license}
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
## Features
${answers.features}  
## Tests
${answers.tests}`


inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is your description?',
    },
    {
      type: 'input',
      name: 'install',
      message: 'What steps are needed to install?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is this used for?',
    },
    {
      type: 'input',
      name: 'contributors',
      message: 'Who are your contributors?',
    },
    {
      type:'input',
      name:'license',
      message:'Which license would you like to choose?'
    },
    {
      type:'input',
      name:'features',
      message:'What are the features of this project?'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What steps are necessary for testing?',
    },
  ])
  .then((answers) => {
    const readmePageContent = generateReadme(answers);

    fs.writeFile('README.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
