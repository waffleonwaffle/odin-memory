import SVG from 'react-inlinesvg';
const Card = ({ operator, operatorName, handleCardClick}) => {
    return (
        <section className="card" onClick={handleCardClick}>
            <div>
                <h2 className='operator-name'>{operatorName}</h2>
                <SVG src={operator}/>
            </div>
        </section>
    )
}

export default Card