import {useRef,memo} from 'react'
import './style.css'




const Rating = () => {
    const rating = useRef(JSON.parse(localStorage.getItem('rating')))

    return (
        <section className='la-casa-game__rating_la_casa rating_la_casa'>
            <div className='rating_la_casa__box'>
                <h2>Rating</h2>
                <div className='rating_la_casa__rating'>
                
                    {
                    rating.current.length>0
                    ?rating.current.map(el=>
                        <div key={el.id} className='rating_la_casa_item'>
                            <span>{el.playerName}:</span>
                            <span>{el.score}</span>
                        </div>
                    )
                    :(<div className='rating_la_casa_item'>
                        <span>No result</span>
                    </div>)
                    }
                </div>
            </div>
        </section>
    );
}

export default memo(Rating);
