# DrumKit
This drum kit web app uses HTML, CSS, and JavaScript(DOM) to play sound when you interact with it.

First, the script counts how many drum buttons are on the page.

It then adds a click event listener to each drum button. When you click a button, the app reads the button’s label (like 'w' or 'a') and plays the matching drum sound.

It also listens for keyboard presses. When you press a key that matches a drum button, the corresponding sound plays too.

The main sound-playing logic is inside the makeSound function, which uses a switch statement to load and play different audio files based on the key pressed or button clicked.
