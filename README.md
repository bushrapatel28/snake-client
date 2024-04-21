# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from here. 

## Final Product

!["The_Snake"](https://github.com/bushrapatel28/snake-client/blob/main/The_Snake.jpg)
!["Snakes_can_talk_after_connecting"](https://github.com/bushrapatel28/snake-client/blob/main/Snakes_can_talk_after_connecting.jpg)


## Getting Started

- Follow steps inside the snek server repo to run the server side
- Run the development snake client using the `node play.js` command.

## Documentation

The following functions are currently implemented:

- `connect()`: Uses the "net" module to help establish a server-client connection using the IP address and Port info. Displays a message on the client terminal to indicate a successful connection. Also, it sends a string to the server to label the snake and displays any data sent by the server to the client. It returns a connection object which can be used by other files.
- `setupInput(conn)`: Accepts a connection object which is used to send messages to the server. Handles user input from stdin with the aid of 2 other helper functions to move the snake in the desired direction and to send canned messages. It also has a `setInterval(cb, delay)` function which keeps the snake moving in whichever direction its head is turned to.
- `handleUserInput(data)`: Is a helper function used by `setupInput` to make the snake move. It binds the WASD keys to the directions in which the snake can move. It also includes the code to end the game if the user presses ctrl+c.
- `handleUserMsgs(key)`: Is another helper function used by `setupInput` to display canned messages only when certain special keys are pressed.

## Files included

- `client.js`: Requires the "net" and "./constants" modules in order to establish a connection to the server. It has the logic to communicate with the server by sending and receiving data. It exports the connection object which can be used by other files.
- `input.js`: It deals with the user input to invoke processes when certain keyboard keys are pressed by the user. It has the logic to keep the snake moving continuously to make the game challenging. Requires the "./constants" module in order to manouver the snake when the user presses any of the WASD keys. It has the logic to send messages when special keys `[";", ".", "/", ","]` are pressed on the keyboard. It can also send data to the server using the connection object.
`constants.js`: Stores all the constant values which are used by different files of this project. It exports an object which contains info about all the stored constants.
`play.js`: Requires "./client" and "./input" modules to execute the game. It invokes the connection to the server.