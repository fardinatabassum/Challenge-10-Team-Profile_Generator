# Challenge-10-Team-Profile_Generator
This repository contains the code required to build a team profile generator

## Description
The purpose of creating this Team profile generator is to allow companies to be able to make teams and display them on a webpage. This application allows users to input their team members information using prompts in a node application and then genrates an HTML page for the user so that they can then view it as a webpage. The team memebrs have various information that are listed under their respective card that redirects the user to the employee's email and github for ease of access. This application also allows users to perform tests to see if the functions are working appropriately

## Installation

### Link to video demo: https://drive.google.com/file/d/11pRRQMPxEteY5gQQMA0-k9qB1j-AJp3L/view

On the terminal install the necessary packages using nmp install including inquirer and jest packages. Install the following packages by using the code below.


```
npm i
```

Afer all the necessary packages have been installed, developers can also check if it if the application is functioning properly by using the code  
```
node index.js
```
Users can then start filling out the prompts using their keybpard and arrows where needed. After all the prompts have been answered, an HTML page will be generated in the dist folder. Open the index.html file in a browser to view the webpage


## Usage

![Challenge-10-Team-Profile_Generator](./images/team-profile%20generator-screenshot.png)

The images folder contains a screenshot of the generated html page with all the team members information. The index.js file contains the code used to create the prompts and the team generator.js files contains the code used to create the template for the team memebr cards and to generate the html page. The test folder conatains various tests to test for the fucntionality of the various member models. The dist folder will contain the generated html page.

## License

Uses the MIT License
# [![License MIT ](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)