# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

|  Day | Deliverable | 
|---|---| 
|Day 1: Tue| Wireframes and Priority Matrix|
|Day 2: Wed| Project Approval /  Pseudocode / actual code|
|Day 3: Thur| Basic Clickable Model |
|Day 4: Fri| Working Prototype |
|Day 5: Sat| Final Working Project |
|Day 6: Sun| Bugs / Stylying / PostMVP |
|Day 7: Mon| Project Presentations |


## Project Description

I want to make a casino craps game, much like the free version here (https://wizardofodds.com/play/craps/). The bets can get complicated, so for my MVP I want to include a 'Pass', 'Don't Pass', Odds, and Bet/Lays. To understand the rules please use this link (https://www.casinotop10.net/craps-rules).

## Wireframes

**Uploaded into images directory**

## Priority Matrix

 - Game Logic (5 hrs)
 - Win Logic (5 hrs)
 - Betting Logic (4 hrs)
 - Board Visuals (3 hrs)
 - Landing Page (2 hrs)
 - Avatar (3 hrs)
 - Multiple Players (6 hrs)


Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

## Game Components

### Landing Page
The player will see an introduction screen with an input area for their name, the amount of money they want to start with, and a button to start a game.

### Game Initialization
The game view will dispay the craps table with their betting options. Below the table will display the name of the player, how much money remains in their balance, how much they are betting, and a display for what they win or lose each roll. To the left of the table will display the dice that they can click on to initiate a roll/turn. 

### Playing The Game
What will be the flow of the game, what will the user be expeted to do and what will the user expect from the gam

### Winning The Game
They can continue playing as long as they have money remaining in their balance. They lose by losing all of their money.

### Game Reset
If they lose all their money, an option will pop up that allows them to start over at the landing page.

## MVP 

 - Game Logic
 - Win Logic
 - Betting Logic
 - Board Visuals
 - Landing Page

## POST MVP

 - Avatar
 - Include more betting options (Playing the Field, 6/8, Come/Don't Come Bets, and Proposition Bets)
 - Multiple Players


## Functional Components

 - Game Logic
    - Function that lets player initiate the first bet on "Pass" or "Don't Pass"
        - Then you either win, lose, or set a point
        - Once a Point is established; players can place odd bets or buys/lays
        - Player rolls until he rolls the established point or craps out
    - Function that randomizes result of rolling two dice

 - Win Logic
    - Function that checks bets and awards money or takes it away
        - Function that checks 'Pass' and 'Don't Pass' bets
        - Function that checks 'odds' bets
        - Function that checks lay/buys
        *All these functions have to feed into display features on the game view*
 - Betting Logic
    - Function that can move chips (3x donominations 10, 25, 50) on the board
    - Function that can clear bets when the opportunity exists
 - Board Visuals
    - Craps Table
    - Player Dashboard
    - Buttons to clear bets, and display rules
    - Highlight area that you are placing bets on
    - Display chips on the board when placed
 - Landing Page
    - Form to enter name and betting amount; button to initiate game


Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method. 

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Game Logic | H | 5hrs| 0hrs | 0hrs |
| Win Logic | H | 5hrs| 0hrs | 0hrs |
| Betting Logic | H | 4hrs| 0hrs | 0hrs |
| Board Visuals | H | 4hrs| 0hrs | 0hrs |
| Landing Page | H | 2hrs| 0hrs | 0hrs |
| Total |  | 20hrs| 0hrs | 0hrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  

## jQuery Discoveries
 Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
