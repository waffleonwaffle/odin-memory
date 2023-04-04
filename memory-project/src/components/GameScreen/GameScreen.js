import Scoreboard from './Scoreboard'
import CardGrid from './CardComponents/CardGrid'
import Header from './Header'
import { useState } from 'react'
const GameScreen = ({selectedMode}) => {

    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)

    const incrementCurrentScore = () => {
        setScore(score + 1)
    }

    const handleBestScore = () => {
        if(score > bestScore) {
            setBestScore(score)
        } 
        setScore(0)
    }

    return (
        <section className='GameScreen'>
            <Header />
            <Scoreboard score={score} bestScore={bestScore}/>
            <CardGrid incrementCurrentScore={incrementCurrentScore} handleBestScore={handleBestScore} selectedMode={selectedMode}/>
        </section>
    )
}

export default GameScreen