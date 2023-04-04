import SVG from 'react-inlinesvg';
const Card = ({ operator, operatorName, handleCardClick}) => {
    return (
        <section className="card">
            <div>
                <h2 className='operator-name'>{operatorName}</h2>
                <SVG src={operator} onClick={handleCardClick}/>
            </div>
        </section>
    )
}

export default Card