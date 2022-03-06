import { Suspense } from 'react';
import './style.css'

const Start = ({setPage}) => {
    const player = JSON.parse(localStorage.getItem('player'))
    const handleChangePage = (page)=>{
        setPage(page)
    }
    const startGame = ()=>{
        localStorage.setItem('player', JSON.stringify(player));
        handleChangePage('GamePlay')
    }
    const newPlayer = ()=>{
        handleChangePage('NewPlayer')
    }
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="la-casa-game__start-page start-page" >
                <div className="start-page__playgame">
                    <div className="start-page__play-game-text">
                        <p>HI PLAYER</p>
                    </div>
                    <div className="start-page__new-buttons">
                        <button className="start-page__new-game-btn" onClick={startGame}>NEW GAME</button>
                        <button className="start-page__new-player-btn" onClick={newPlayer} >NEW PLAYER</button>
                    </div>
                </div>
            </div>
        </Suspense>
    );
}

export default Start;
