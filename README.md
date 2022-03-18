# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Zachri Hall

Time spent: 3.5 hours spent in total

Link to project: https://dirt-confused-brie.glitch.me

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] List anything else that you can get done to improve the app!
-     Added different difficulties (Easy, Medium, and Hard) that change the length of the pattern and speed of clue play.

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![x] https://cdn.glitch.global/9ba560d0-3882-46e1-921d-6634bdfe8129/memory-game.gif?v=1647560759455

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
I didn't use any outside resources.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
One challenge I did encounter was when implementing different game modes. When I first wrote it it worked for a time then the console would log TypeErrors of null and say that it couldn't light up the button. I was confused at first so went back through my code and had it console.log everything that was going on. Then after seeing the log I noticed that in my pattern there were 0's coming up and that wouldn't correlate to an actual button since none of them were zero hence why it couldn't assign a value to that button nor light up button "0". So after thinking for a bit on how I would solve this problem I remembered that the Math.ceil() module was available. I previously was using floor and changing fixed my problem. Another problem I ran into was with naming but not as large as an issue. Naming some of my local variables things that were already global was a small mishap, but an easy fix. I just renamed them as well as variables that were inputs into my function and that solved the problem. I  also did quick research on MDN Docs to learn more about modules I was using. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
After completing my submission I definitely have a few questions about how I can learn more about web development and deploying static and responsive sites. For example, how could I learn more about error messages that log to the online console as well as how could I learn more about databases because I saw that the program was taking up storage locally on glitch and was curious as to how I could make it run on its own. I think it would be on a server? But I'm not too sure and would love to learn more about how that process works. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had more time to work on this projects I would spend time trying to condense the code and make it as efficient as possible as well as legible because I think that's very important especially when collaborating with other developers. I would also try to implement the images for different buttons and more interesting sounds maybe even different game modes to add more functionality to the code and make it interesting. I would also work on making it as sound as possible; making it so that no other inputs would be allowed and that there's no problems ensuring that it would work always and in any scenario. 



## Interview Recording URL Link

https://www.loom.com/share/4a905c8b05484cfaa2057e30301d817d?sharedAppSource=personal_library


## License

    Copyright Zachri Hall

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
