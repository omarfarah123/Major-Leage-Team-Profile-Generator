const inquirer = require('inquirer');
const fs = require('fs');
const chalk = require('chalk');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');


const inputValidator = async (input) => {
    if (input === '') {
       return 'Please enter valid input';
    }
    return true;
 };




const employeeTeam = [];
const employeeIDs = [];
    console.log("Major Leage Team Generator")
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the name of the manager?",
            validate: function(name){
                if(name === ""){
                    console.log(chalk.red("Please enter a name."))
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "employeeId",
            message: "Please enter the employee Id",
            validate : function (employeeId){
                if(employeeId === ""){
                  console.log(chalk.red("No ID entered"))
                  return false;
                } else if (employeeIDs.includes(employeeId)) {
                  console.log('⛔️ ID has already been taken');
                  return false;
                } else {
                  return true;
                }
          }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the manager's email address?",
            validate: function (email) {
  
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    
                if (valid) {
                    return true;
                } else {
                    console.log(chalk.red(" Please enter a valid email"))
                    return false;
                }
            }
            
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter the Manager's office number?",
            
            //validate: inputValidator()
        }
    ]).then((response) => {
        employeeTeam.push(new Manager(response.name, response.employeeId, response.email, response.officeNumber))
        employeeIDs.push(response.employeeId)
        console.log(chalk.green(`Manager ${response.name} added to team`))
        main()
    })

function main(){
    inquirer
    .prompt([
        {
            type: "list",
            name: "options",
            message: "Please choose a team member to add?",
            choices: ["Engineer", "Intern", "Remove Member", "Done"],
        },
    ]).then((response) => {
        if(response.options === "Engineer"){
            engineer();
        } else if(response.options === "Intern"){
            intern();
        } else if (response.options === "Remove Member"){
            removeMember();
        } else {
            pageCreation();
        }
    }) 
}

function engineer(){
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the name of the Engineer?",
            validate: function(name){
                if(name === ""){
                    console.log(chalk.red("Please enter a name."))
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "employeeId",
            message: "Please enter the Employee Id",
            validate : function (employeeId){
                if(employeeId === ""){
                  console.log(chalk.red("No ID entered"))
                  return false;
                } else if (employeeIDs.includes(employeeId)) {
                  console.log('⛔️ ID has already been taken');
                  return false;
                } else {
                  return true;
                }
          }
            
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the Engineer's email address?",
            validate: function (email) {
  
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    
                if (valid) {
                    return true;
                } else {
                    console.log(chalk.red(" Please enter a valid email"))
                    return false;
                }
            }
        },  
        {
            type: "input",
            name: "github",
            message: "Please enter the Engineer's github username?",
            validate : function (github){
                if(github === ""){
                    console.log(chalk.red("Please enter a github username"))
                } else {
                    return true;
                }
            }
        }
    ]).then((response) => {
        employeeTeam.push(new Engineer(response.name, response.employeeId, response.email, response.github))
        console.log(chalk.green(`Engineer ${response.name} added to team`))
        main();
    })
}

function intern(){
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the name of the Intern?",
            validate: function(name){
                if(name === ""){
                    console.log(chalk.red("Please enter a name."))
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "employeeId",
            message: "Please enter the Intern Id",
            validate : function (employeeId){
                  if(employeeId === ""){
                    console.log(chalk.red("No ID entered"))
                    return false;
                  } else if (employeeIDs.includes(employeeId)) {
                    console.log('⛔️ ID has already been taken');
                    return false;
                  } else {
                    return true;
                  }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the Intern's email address?",
            validate: function (email) {
  
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    
                if (valid) {
                    return true;
                } else {
                    console.log(chalk.red(" Please enter a valid email"))
                    return false;
                }
           }   
        },
        {
            type: "input",
            name: "github",
            message: "Please enter the Intern's school?",
            validate: function(school){
                if(school === ""){
                    return false;
                } else {
                    return true;
                }
            }
            
        }
    ]).then((response) => {
        employeeTeam.push(new Intern(response.name, response.employeeId, response.email, response.github))
        console.log(chalk.green(`${response.name} added to team`))
        main()
    })
}

function removeMember(){
    inquirer.prompt([
        {
            type: "list",
            name: "removal",
            message: "Please select a member to remove",
            choices : employeeTeam
        }
    ]).then((response) => {
        const memberIndex = employeeTeam.findIndex((teamMember) => teamMember == response.removal);
        employeeTeam.splice(memberIndex, 1)
        console.log(chalk.green(`Intern ${response.removal} has been deleted!`));
        main()
    })
}

function pageCreation(){
    if(employeeTeam.length === 0){
        console.log(chalk.red("No members were found on the roster!!!"))
    } else {
        let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Team</title>
    </head>
    <body>
        <div class="container-fluid p-3 bg-primary text-white text-center">
            <h1>My Team</h1>
          </div>
          <div class="members">`;
          for(let i = 0; i < employeeTeam.length; i++){
                 var role = employeeTeam[i].getRole()
                 var name = `Name: ${employeeTeam[i].getName()}`;
                 var id = `ID: ${employeeTeam[i].id}`;
                 var email = `Email: ${employeeTeam[i].getEmail()}`;
                 var specific;
                if(employeeTeam[i].getRole() == 'Manager'){
                    role += `🧑‍💼`;
                    specific = `<p>Office Number: ${employeeTeam[i].officeNumber}</p>`;
                } else if(employeeTeam[i].getRole() == 'Engineer'){
                    role += `👨‍💻`;
                    specific =`<a href="https://github.com/${employeeTeam[i].github}">GitHub: ${employeeTeam[i].github}</a>`
                } else if(employeeTeam[i].getRole() == 'Intern'){
                    role += `🧑‍🎓`;
                    specific = `<p>Education: ${employeeTeam[i].getSchool()}</p>`
                }    
                html += `<div class="card" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title" style="background-color: lightblue;">${role}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${name}</h6>
                <p class="card-text">${id}</p>
                <a href="mailto:${email}">${email}</a>
                <br>
                ${specific}
              </div>
              </div>
              `;
          }
    html +=      
    `</div>
    </body>
    </html>`;
    if (fs.existsSync(`${__dirname}\\dist\\index.html`)) {
        try {
            fs.unlinkSync(`${__dirname}\\dist\\index.html`)
            console.log('Old HTML page has been deleted')
        } catch(err) {
            console.error(err);
        }
    }
    fs.appendFile(`${__dirname}\\dist\\index.html`, html, function (err) {
        if (err) throw err;
        console.log('File has been saved!');
        require('child_process').exec(`start "" "${__dirname}\\dist"`)
      });
    }
}