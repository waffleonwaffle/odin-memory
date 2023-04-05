import './App.css';
import GameScreen from './components/GameScreen/GameScreen'
import StartScreen from './components/StartScreen/StartScreen'
import { useState } from "react";
const App = () => {
  const [selectedMode, setSelectedMode] = useState(null)
  const switchToGameScreen = (setMode) =>{
    setSelectedMode(setMode)
    const startScreen = document.getElementById('StartScreen')
    const gameScreen = document.getElementById('GameScreen')
    startScreen.classList.add('hidden')
    gameScreen.classList.remove('hidden')

}
  return (
    <section className="App">
      <section className='Screens' id='StartScreen' >
        <StartScreen switchToGameScreen={switchToGameScreen}/>
      </section>
      <div className='hidden' id='GameScreen'>
        <GameScreen selectedMode={selectedMode}/>
      </div>
    </section>
  );
}

export default App;
