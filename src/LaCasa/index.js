import {Suspense,useState,useEffect} from "react"
import {info} from '../helpers/constants'

import Start from './Start'
import GamePlay from "./GamePlay"
import CreateNewPlayer from "./CreateNewPlayer"

import './style.css'

const LaCasa = () => {
    const [page,setPage] = useState('Start')
    const rating = JSON.parse(localStorage.getItem('rating'))
    const player = JSON.parse(localStorage.getItem('player'))
    if(!rating){
        localStorage.setItem('rating', JSON.stringify([]));
    }
    if(!player){
        localStorage.setItem('player', JSON.stringify("NEW PLAYER"));
    }
    useEffect(()=>{
        if(page === 'refresh'){
            setPage('GamePlay')
        }
    },[page])
    
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className='la-casa-game'>
                <div className="la-casa-game__box">
                    <>
                        {page === 'Start'
                        ?<Start setPage={setPage}/>
                        :null}

                        { page === 'GamePlay'
                        ?<GamePlay info={info} setPage={setPage}/>
                        : null}

                        { page === 'NewPlayer'
                        ?<CreateNewPlayer setPage={setPage}/>
                        : null}
                    </>
                </div>
            </div>  
        </Suspense>
    );
}

export default LaCasa;
