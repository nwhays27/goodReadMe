function generateReadMe(data, res){
    return `
    
    Title: ${data.title}
    Description: ${data.description}
    Installation${data.installation}
    Usage${data.usage}
    License${data.license}
    Contributing${data.contributing}
    Tests${data.tests}
    Questions${data.questions}
    Email:${res.data.email}
    `
}


module.exports = generateReadMe