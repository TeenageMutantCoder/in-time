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
