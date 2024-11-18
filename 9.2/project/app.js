//  const generatePage = () => 'Name: Jane, Github: janehub';

//  console.log(generatePage());

//   But in the special case when a function has only a single statement, the curly braces, {}, are unnecessary and the return statement is implied.

// ***************************

// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

// console.log(generatePage('jane','janehub'));

// we can wrap the string in backticks and interpolate the variables with the ${<variable>} syntax.

//     **********************************

// const generatePage = (userName, githubName) => {

//     return `
  
//       Name: ${userName}
  
//       GitHub: ${githubName}
  
//     `;
  
//   };
  
//   console.log(generatePage("Jane","janehub"));

// const generatePage = (name, github) => {

//     return `
  
//     <!DOCTYPE html> 
  
//     <html lang="en"> 
  
//     <head>
  
//       <meta charset="UTF-8">
  
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
//       <meta http-equiv="X-UA-Compatible" content="ie=edge">
  
//       <title>Portfolio Demo</title>
  
//     </head>
  
  
//     <body>
  
//       <h1>${name}</h1>
  
//       <h2><a href="https://github.com/${github}">Github</a></h2>
  
//     </body>
  
//     </html>
  
//     `;
  
//   };
  
// console.log(generatePage("jane","Janehub"));

// The require statement is a built-in function that's globally available in Node.js. It allows the app.js file to access the fs module's functions through the fs assignment.


// const fs = require('fs');


// fs.writeFile('index.html', generatePage(name, github), err => {

//     if (err) throw err;
  
  
//     console.log('Portfolio complete! Check out index.html to see the output!');
  
//   });
//   ************************************************************
  
const fs = require('fs');

const generatePage = require('./src/page-template.js');



const profileDataArgs = process.argv.slice(2);


const [name, github] = profileDataArgs;




fs.writeFile('./index.html', generatePage(name, github), err => {

  if (err) throw new Error(err);


  console.log('Portfolio complete! Check out index.html to see the output!');

});

