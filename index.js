//Inquirer library used for taking input
const inquirer = require('inquirer');
//FS library for creating files
const fs = require('fs');
//Chalk library used for command line colors
const chalk = require('chalk');
//All of the classes being imported
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');





//Array containing members being added to the team
const employeeTeam = [];
//Array containing the ids of the employees added
const employeeIDs = [];
    console.log("Major Leage Team Generator")
    //Taking in data for the manager
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the name of the manager?",
            //Checks if name being entered is valid
            validate: function(name){
                if(name.trim().length === 0){
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
            //Checks if employee id being entered is valid 
            validate : function (employeeId){
                if(employeeId.trim().length === 0){
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
            //Chacks if email being entered is valid
            validate: function (email) {
                
                //Checks if data entered passed this regex test
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
            validate : function(officeNumber){
                if(officeNumber.trim().length === 0){
                    console.log(chalk.red("Please enter an office number"))
                    return false;
                } else {
                    return true;
                }
            }
        }
    ]).then((response) => {
        //Created a new Manager object with data entered
        employeeTeam.push(new Manager(response.name, response.employeeId, response.email, response.officeNumber))
        employeeIDs.push(response.employeeId)
        console.log(chalk.green(`Manager ${response.name} added to team`))
        main()
    })


function main(){
    //Main function to allow user to choose what kind of person to add to the team
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
                if(name.trim().length === 0){
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
                if(employeeId.trim().length === 0){
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
                if(github.trim().length === 0){
                    console.log(chalk.red("Please enter a github username"))
                } else {
                    return true;
                }
            }
        }
    ]).then((response) => {
        //Adds an Engineer to the team by creating an object with the values entered
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
                if(name.trim().length === 0){
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
                  if(employeeId.trim().length === 0){
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
    
                if (email.trim().length === 0) {
                    console.log(chalk.red("No email entered!"))
                    return false;
                } else if(!valid) {
                    console.log(chalk.red(" Please enter a valid email"))
                    return false;
                } else {
                    return true;
                }
           }   
        },
        {
            type: "input",
            name: "school",
            message: "Please enter the Intern's school?",
            validate: function(school){
                if(school.trim().length === 0){
                    console.log(chalk.red("No school entered"))
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
//This function removes members which are selected for removal
function removeMember(){
    inquirer.prompt([
        {
            type: "list",
            name: "removal",
            message: "Please select a member to remove",
            //Displays a choice list of all the members which have been created and have been added
            choices : employeeTeam
        }
    ]).then((response) => {
        //Finds the index where the employee is located
        const memberIndex = employeeTeam.findIndex((teamMember) => teamMember == response.removal);
        //Once found remove the member
        employeeTeam.splice(memberIndex, 1)
        console.log(chalk.green(`Intern ${response.removal} has been deleted!`));
        main()
    })
}

function pageCreation(){
    //If there are no members on the team then alert user
    if(employeeTeam.length === 0){
        console.log(chalk.red("No members were found on the roster!!!"))
    } else {
        //HTML page generated for the team
        let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Major League Team</title>
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
    //If the file already exists meaning old generated page then delete
    if (fs.existsSync(`${__dirname}\\dist\\index.html`)) {
        try {
            fs.unlinkSync(`${__dirname}\\dist\\index.html`)
            console.log('Old HTML page has been deleted')
        } catch(err) {
            console.error(err);
        }
    }
    //File creation with team added
    fs.appendFile(`${__dirname}\\dist\\index.html`, html, function (err) {
        if (err) throw err;
        console.log('File has been saved!');
        //Opens the location where the file lives
        require('child_process').exec(`start "" "${__dirname}\\dist"`)
      });
    }
}