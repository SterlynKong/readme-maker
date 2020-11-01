// function to "create" license badge
function createLicenseBadge () {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
