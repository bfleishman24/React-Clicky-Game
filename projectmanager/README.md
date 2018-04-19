# Clicky-Game-React

## Overview

In this game, you'll play a memory game I made with React.

Check out the [My Game](https://github.com/bfleishman24/React-Clicky-Game).
### Instructions

1. The application will keep track of your score. The score will be incremented when clicking an image for the first time. Your score will be reset to 0 if you click the same image more than once.

2. Every time an image is clicked, the images rendered to the page will shuffle themselves in a random order.

3. Once your score is reset after an incorrect guess, the game will restart.
- - -
### App Structure
```
├── public
│   ├── images
│   └── favicon.ico
│   └── index.html
│   └── manifest.json
│   └── style.css
│
├── src
│   ├── components
│   │   ├── Footer.js
│   │   ├── GameItem.css
│   │   ├── GameItem.js
│   │   ├── Header.js
│   │   ├── MainPart.js
│   │   ├── Score.js
│   │   └── footer.css
│   ├── materialize
│   │   │── css
│   │   │   ├── materialize.css
│   │   │   └── materialize.min.css
│   │   │── fonts
│   │   │   └── TBD
│   │   └── js
│   │   │   ├── materialize.js
│   │   │   ├── materialize.min.js
│   │   │   └── test.css
│   │   └── LISCENSE
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   └── registerServiceWorker.js
│
├── .gitignore
│
└── package.json
```

