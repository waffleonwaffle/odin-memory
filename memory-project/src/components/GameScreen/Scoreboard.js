const Scoreboard = ({ score, bestScore }) => {
    return (
        <section className='scoreboard'>
            <h3>
                <span style={{ color: 'rgb(8, 114, 206)' }}> Score: {score}</span>
                <span style={{ color: 'rgb(218, 96, 10)' }}> Best Score: {bestScore}</span>
            </h3>

        </section>

    )

}

export default Scoreboard