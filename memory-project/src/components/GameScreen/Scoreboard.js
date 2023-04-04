const Scoreboard = ({ score, bestScore }) => {
    return (
        <section className='scoreboard'>
            <span style={{ color: 'rgb(8, 114, 206)' }}> Score: {score}</span>
            <span style={{ color: 'rgb(218, 96, 10)' }}> Best Score: {bestScore}</span>
        </section>

    )

}

export default Scoreboard