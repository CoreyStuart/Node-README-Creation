

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 
 return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  =========================================================================================
  # Github: ${data.username}
  =========================================================================================
  # Email: ${data.email}
  =========================================================================================
  # Short description: ${data.description} 
  =========================================================================================
  # License choice: ${data.license}
  =========================================================================================
  # Dependencies: ${data.dependencies}
  =========================================================================================
  # Test choice: ${data.test}
  =========================================================================================
  # User's update about using repo: ${data.using}
  =========================================================================================
  # What does the user need to know about contributing to the repo: ${data.contributing}
`;
}

module.exports = generateMarkdown;
