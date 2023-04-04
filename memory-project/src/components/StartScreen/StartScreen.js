
const StartScreen = ({switchToGameScreen}) => {
    return (
        <section className="StartScreen">
            <ul className="gameButtonList">
                <li><button className="startGameButtons Attackers" onClick={() => {switchToGameScreen('Attacker')} }>Attackers</button></li>
                <li><button className="startGameButtons Defenders" onClick={() => {switchToGameScreen('Defender')} }>Defenders</button></li>
            </ul>
        </section>
    )

}

export default StartScreen