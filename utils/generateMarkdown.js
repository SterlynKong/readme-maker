// create license badge
function createLicenseBadge (license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return '';
};


// create license link
function createLicenseLink (license) {
  if (license !== "None") {
    return (
      `\n* [License](#license)\n`
    )
  }
  return '';
};


// create license section
function createLicenseSection(license) {
  if (license !== "None") {
    return (
    `This project is licensed under the ${license} license.`
    )
  }
  return ''
};


// generate URL section
function createUrl (url) {
  if (url) {
    return url    
  }
  return 'N/A'
}


// generate img section
function createImg (proj_title, img) {
  if (img) {
    return (
      `![${proj_title}](${img} "${proj_title} Screenshot")`
    )
  }
  return 'N/A'
}


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.proj_title}
  ${createLicenseBadge(data.license)}

  ## Description:
  ${data.description}



  ## Table of contents:
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Tests](#testing)
  * [URL](#url)
  * [Screen-Shot](#screenshot)
  * [Contributing](#contributing)
  * [Questions](#questions)



  ## Installation:
  To install necessary dependencies, run the following command(s):

  \`\`\`
  ${data.installation}
  \`\`\`


  ## Usage:
  ${createLicenseLink (data.license)}


  ## License
  ${createLicenseSection(data.license)}


  ## Testing:
  To run test, please run the following command:

  \`\`\`
  ${data.test}
  \`\`\`


  ## URL:
  ${createUrl(data.url)}


  ## Image:
  ${createImg(data.proj_title, data.img)}


  ## Contributing:
  ${data.contributing}


  ## Questions:
  If you have any questions about the repo, please open an issue or contact me directly at ${data.email}. You can view more of my projects at [${data.github}](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
