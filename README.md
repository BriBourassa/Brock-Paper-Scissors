## Rock, Paper, Scissors

This project is my creative take on a rock-paper-scissors type browser game played against a computer. For those unfamiliar with pokemon type advantages, it is basically rock-paper-scissors but with elements such as fire, water and grass. The user will be able to select a pokemon type from a list in two different mode: Classic and Challenge, and the computer will randomize the opposing pokemon. The game's scores (wins/loses) are recorded and displayed in the DOM for each mode above their respective pokemon.


## Installation Instructions ## 
Repository Available Here: 
https://github.com/BriBourassa/Brock-Paper-Scissors

Step 1: Fork repository\
Step 2: Clone repository onto local machine\
Step 3: In terminal - change directory(cd) into newly cloned directory, can also use Finder to search for index.html\
Step 4: Open index.html file in browser\
Step 5: Choose your game mode and pokemon type!

Or visit the deployed website page! https://bribourassa.github.io/Brock-Paper-Scissors/

## Preview of App:

![demo3](https://user-images.githubusercontent.com/111149043/212789240-ac604fe8-65ae-4a63-b0bc-684c448fbdc3.png)


## Contributors:

[Bri Bourassa](https://github.com/BriBourassa)


## Context:

This was the final project in Mod 1 of Turing's Frontend Program.

## Learning Goals/ Achievements

One things I focused on for this project is the Single Responsibility Principle (SRP). My aim was to really break down the giant functions that can happen when coding that I have fallen victim to in the past. I also tried to make a clear distinction between the Data Model and the DOM by keeping the function of the two classes (player.js and game.js) to be updating the Data Model, and the DOM representations kept in main.js. 

I am also striving for DRY code and not repeating myself! I implemented an interesting way to not have massive repetitive conditionals while checking the win conditions and put each pokemon in game.js as a key. Then I made each pokemon's value an array of the pokemon they are strong against. Doing so made it easy to use one line of code to check for a win dynamically.

I also learned how local storage works, something I have never done before, when I did the optional extension.
