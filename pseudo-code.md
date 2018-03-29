##Landing Page Pseudo-Code
Build a modal that has a form to get Player Name input, starting amount, and a button to start the game. Player name and starting balance have to be set as a cont and let respectively.

The rest is all CSS to make it look perty.

##Craps Table Visual
- Construct table out of divs
    - Attach eventListeners to betting areas on the table
- Create Player Dashboard
- Create Animated Dice
- Create modal that will open if clicked to display rules

##Game Play Pseudo-Code

Establish variables for the numberValue of the Point and a Boolean Value of whether is established or not. Also, need a variable for what chip denomination is selected (needs to be let !const) (10,25,50). Also, need a variable for the dice value.

ie const PointnumberValue = null (4,5,6,8,9,10)
ie const PointEstablished = true/false
ie let chipDenomination =
ie let diceValue = (1-12)


Build an object constructor that will build a Player and include their name and properties for their balance, "Pass" bet, "Don't Pass" bet, 'Odds' bet for "Pass", 'Odds' bet for "Don't Pass", Lay Bet for '4,5,6,8,9,10', and buy bet for '4,5,6,8,9,10'

Build a function that resets the highlighted chip denomination value. A player can select 10,25,or 50. Need to add event listener on the chips.

Build a function that is activated when a player clicks on the area of the table that the player wants to place a bet on.

Build a function that manages game flow. Enables player to bet, then roll, then determines a check for win/loss/point. Then allows more betting if a point is established, and checks for winners/losers after each subsubsequent roll.
    - Can manage whether a point is established or not through switching (const PointEstablished = true/false)
    - Also, need to build logic to manage when people are allowed to place bets and throw error when they can't

Build a function to simulate the outcome of rolling dice. Also, need to feed the outcome to an animated pair of dice on the gameview screen.

Build win/loss logic function:
    - Need win/loss logic for "Pass" bets
    - Need win/loss logic for "Don't Pass" bets
    - Need win/loss logic for "Odds" for "Pass" bets
    - Need win/loss logic for "Odds" for "Don't Pass" bets
    - Need win/loss logic for "Buys" bets
    - Need win/loss logic for "Lays" bets
    - Need a function to check for balance that throws error when insufficient funds occur and when the player has spent their entire balance. Also ends with allowing the player to restart.
    - Need to figure out odds for each bet and whether storing values in an object is the easiest way to go about storing values of bets
    - Each function needs to change object property values for the Player**





