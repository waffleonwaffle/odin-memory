import React, { useState } from "react";
import Card from './Card'
import r6operators from "r6operators"
const initialOperatorArray = Object.entries(r6operators);
const CardGrid = ({ incrementCurrentScore, handleBestScore, selectedMode}) => {
    const [clickedCards, setClickedCards] = useState([]);
    const shuffleGrid = () => {
        const shuffledArray = [...initialOperatorArray];
        for (let currentCard = shuffledArray.length - 1; currentCard > 0; currentCard--) {
            const cardToSwap = Math.floor(Math.random() * (currentCard + 1));
            [shuffledArray[cardToSwap], shuffledArray[currentCard]] = [shuffledArray[currentCard], shuffledArray[cardToSwap]];
        }
        return shuffledArray;
    };

    const renderCardGrid = () => {
        // eslint-disable-next-line array-callback-return
        return shuffleGrid().filter(([, operator]) => operator.role === selectedMode).map(([, operator]) => {
            const operatorSVG = operator.toSVG()
            return (
                <Card operator={operatorSVG} operatorName={operator.name} handleCardClick={() => handleCardClick(operator.id)} />
            )

        })
    }

    const handleCardClick = (operatorID) => {
        if (!clickedCards.includes(operatorID)) {
            setClickedCards([...clickedCards, operatorID])
            incrementCurrentScore()
        } else {
            handleBestScore()
            setClickedCards([])
        }
    }
    return (
        <div className='card-grid'>
            {renderCardGrid()}
        </div>
    )
}

export default CardGrid