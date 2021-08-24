# Udemy_Stuff

## Milestone Project 1
### TIC TAC TOE

The purpose of milestone 1 was to create a TIC TAC TOE game playable for 2 players using functions.

    Step 1: I wrote a function that can print out a board.  It was set up as a list, where each index 1-9 corresponds with a number on a number pad, so get a 3 by 3 board representation.
    Step 2: Wrote a function that can take a player input and assign a marker as X or O.
    Step 3: Wrote a funtion that takes in the board list object, marker X or O, and a desired postion (number 1-9) and assigns it to the board.
    Step 4: Wrote a funtion that takes in a board and checkes to see if someone has won.
    Step 5: Wrote a function that uses the random module to randomly decides which player goes first.
    Step 6: Wrote a function that returns a boolean indicating whether a space on the board is freely available.
    Step 7: Wrote a function that checks if the board is full and returns a boolean value.  True if full, False otherwise.
    Step 8: Wrote a function that asks for a players next positon (as a number 1-9), then uses the function from step 6 to check if its a free position.  If it is, then return the posiiton for later use.
    Step 9: Wrote a function that askes the player if they want to play again and returns a boolean.  True if they do want to play again.
    Step 10: Used while loops and the functions above to run the game.    

## Milestone Project 2
### BlackJack 

The purpose of the mileston project 2 was to create a BlackJack game.

    Step 1: Import the random module.  This will be used to shuffle the deck prior to dealing.  The declare variables for suits, ranks, and values. 

    Step 2: Create card object for 2 attributes: suit and rank. 

    Step 3: We have 52 card objects stored to be shuffled.  We need to instatiate all 52 unique card objects and add them to the list.  So long as the card class definition appears in the code, we can build card objects inside our Deck method.

    Step 4: In addition to holding card objects dealth from the Deck, the Hand class may be used to calculate the value of those cards using the values dictionary defined. 

    Step 5: In addition to decks of cards and hands, we need to keep track of a Player's starting chips, bets, and ongoing winnings. This can be done using global varaiables (chips).

    Step 6: Write a function for taking bets.  Since we're asking the user for an integer value, this would be a good place to use try/execpt.  We used a while loop here to continually prompt the user fr input until we recieved an integer value that was within the Player's betting limit.

    Step 7: Write a function for taking hits.  Either player can take hits until they bust.  This funcgion will be called during gameplay anytime a Player requests a hit, or a Dealer's hand is less than 17.  It should take in Deck and Hand objects as arguements, and deal one card off the deck and add it to the the Hand.

    Step 8:  Write a function prompting the Player to Hit or Stand.  This function should accept the deck and the player's hand as arguments, and assing playing as a global variable.  If the player hits, employ the hit function.  If the player stands, set the playing variable to False.

    Step 9: 


