import './style.css'

const Score = ({score}) => {
    return (
        <section className='la-casa-game__score_la_casa score_la_casa'>
            <div className='score_la_casa__box'>
                <h3>{score}</h3>
                <h2>Score</h2>
            </div>
        </section>
    );
}

export default Score;
