import {useEffect,useRef} from 'react'
import './style.css';



const Finish = ({finish,isWin,score,setPage}) => {
    const {current} = useRef(JSON.parse(localStorage.getItem('player')));

    useEffect(()=>{
        if(isWin){
            let rating = JSON.parse(localStorage.getItem('rating'))
            rating.push({
                playerName:current,
                score:score
            })
            rating = rating
            .sort((a, b) => (a.score < b.score) ? 1 : -1)
            .slice(0,8)
            .map((el,i)=>{
                el.id = i+1
                return el
            })
            localStorage.setItem('rating', JSON.stringify([...rating,]));
        }
    },[isWin])
    const handleChangePage = (page)=>{
        setPage(page)
    }
    return (
        <div className="finish">
            <div className='finish__info'>
                <h2>{current}</h2>
                <h3>{isWin?'You Win':"You Lose"}</h3>
                <p>Score : {score}</p>
            </div>
            <div className='finish__btn'>
                <button onClick={()=>handleChangePage('refresh')}>New Game</button>
                <button onClick={()=>handleChangePage('Start')}>Main Menu</button>
                <button onClick={()=>handleChangePage('NewPlayer')}>New Player</button>
            </div>
        </div>
    );
}

export default Finish;
