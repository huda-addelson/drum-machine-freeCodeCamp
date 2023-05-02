import { useEffect } from 'react';
import { motion } from 'framer-motion';
import './index.css';

function App() {
  const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

  const playDrum = (str) => {
    if (str === 'q' || str === 'Q') {
      document.getElementById('display').innerText = 'Rock on!';
    } else if (str === 'w' || str === 'W') {
      document.getElementById('display').innerText = 'Drum Roll!';
    } else if (str === 'e' || str === 'E') {
      document.getElementById('display').innerText = 'Music Time!';
    } else if (str === 'a' || str === 'A') {
      document.getElementById('display').innerText = 'Big Hit!';
    } else if (str === 's' || str === 'S') {
      document.getElementById('display').innerText = 'Party On!';
    } else if (str === 'd' || str === 'D') {
      document.getElementById('display').innerText = 'Jamming on!';
    } else if (str === 'z' || str === 'Z') {
      document.getElementById('display').innerText = 'Popstarts!';
    } else if (str === 'x' || str === 'X') {
      document.getElementById('display').innerText = 'On the mood!';
    } else if (str === 'c' || str === 'C') {
      document.getElementById('display').innerText = 'On the rythm!';
    }
    const audio = document.getElementById(str);
    audio.load();
    audio.play();
  };

  useEffect(() => {
    const keyDownHandler = (event) => {
      const keystroke = event.key;

      if (keystroke === 'q' || keystroke === 'Q') {
        playDrum('Q');
      } else if (keystroke === 'w' || keystroke === 'W') {
        playDrum('W');
      } else if (keystroke === 'e' || keystroke === 'E') {
        playDrum('E');
      } else if (keystroke === 'a' || keystroke === 'A') {
        playDrum('A');
      } else if (keystroke === 's' || keystroke === 'S') {
        playDrum('S');
      } else if (keystroke === 'd' || keystroke === 'D') {
        playDrum('D');
      } else if (keystroke === 'z' || keystroke === 'Z') {
        playDrum('Z');
      } else if (keystroke === 'x' || keystroke === 'X') {
        playDrum('X');
      } else if (keystroke === 'c' || keystroke === 'C') {
        playDrum('C');
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  return (
    <div className='wrapper-container'>
      <div id='drum-machine'>
        <h1>Drum Machine</h1>
        <div id='display'>Name Audio</div>
        <div className='wrapper-drum'>
          {keys.map((key, index) => {
            return (
              <motion.button
                className='drum-pad'
                key={index}
                id={`drum-${index}`}
                onClick={() => playDrum(key)}
                whileTap={{ scale: 0.7 }}
                whileHover={{ scale: 1.05 }}>
                {key}
                <audio
                  src={`https://drum-machine-phi-nine.vercel.app/src/assets/${key}.mp3`}
                  id={key}
                  className='clip'
                />
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
