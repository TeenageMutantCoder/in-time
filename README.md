# In-Time

Web application to practice keeping time in a musical context. You choose a song or load a random beat and press a key (or use mouse button or touch controls) to play along with the beat. The beat will fade out, and you will need to continue the beat. You can choose the length of time that the song/beat will fade out (if at all). You can save your scores and have them show up on a leaderboard along with your name if signed in.

Tech Stack:

- MongoDB
- Express
- React (with NextJS)
- Node

MVP Features:

- Play a beat
- Track user input through keyboard (any key), mouse (any key), and touch
- Compare time of beat with user's attempt and save results
- Display accuracy of user's attempt

Future features:

- Allow user to play to a song instead of just a beat
- Allow user to choose length of practice
- Allow user to choose difficulty of practice by increasing or decreasing (or silencing after a certain amount of time) the volume of the beat
- Maybe add a beat sandbox mode where you can play drums to a metronome.
- Allow user to save scores to leaderboard
- Allow user to save scores to account for measuring progress over time.
- Add microphone user input device (for tracking instruments, voice, clapping, etc.)

## How To Use

### From Source Code

**Note: Must have the latest version of Node installed**

1. Open your terminal of choice.
2. Clone the repository with `git clone https://github.com/TeenageMutantCoder/in-time`
3. Change to the respository directory with `cd in-time`
4. Run the client
   1. Change to the client directory using `cd client`
   2. Install needed dependencies with `npm install` or `yarn install` (you can install yarn with `npm install -g yarn`)
   3. Run the development server with `npm run dev` or `yarn dev`
   4. In your web browser, view the site at [http://localhost:3000/](http://localhost:3000/)
