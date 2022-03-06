import Card from "../Card"
import './style.css'


const Tray = ({cards,values,clickHandler,timer}) => {
    return (
        <div className='la-casa-game__tray_la_casa tray_la_casa'>
            <div className='tray_la_casa__box'>
                {
                    [...Array(cards.length).keys()].map((el)=>
                        <Card 
                            key={el} 
                            value={values[el]}
                            active={cards[el]}
                            clicked={() => clickHandler(el)} 
                            timer={timer}/>
                    )   
                }
            </div>
        </div>
    );
}

export default Tray;
