import { useState,useEffect } from "react";
import Rating from "../Rating";
import Tray from "../Tray";
import Timer from "../Timer";
import Score from "../Score";
import Stars from "../Stars";
import Finish from "../Finish";
import useTimer from '../../hooks/useTimer';
import './style.css'

function randomSort(a, b) {
    return 0.5 - Math.random();
  }


const setting = {
    time:60,
    delay:1000,
    speed:3000,
    hitPoint:30,
    wrightPoint:50
}
const boombSetting = {
    time:5,
    delay:1000,
}
const GamePlay = ({info=[],setPage}) => {
    const [finish,setFinish]  = useState(false)
    const [isWin,setIsWin] = useState(false)
    const [stars,setStars] = useState(3)
    const [cards,setCards] = useState([...Array(16).keys()].map(n => true))
    const [values,setValues] = useState(null)
    const [selected,setSelected] = useState([])
    const [score,setScore] = useState(0)
    const [hits,setHits] = useState(0)
    const [blockCards,setBlockCards] = useState([])
    const {timerIndicate,start,stop} = useTimer(boombSetting.delay,boombSetting.time)
    const [timer,setTimer] = useState(null)
    useEffect(()=>{
        const concatInfo =  JSON.parse(JSON.stringify(info.concat(JSON.parse(JSON.stringify(info))).sort(randomSort)));
        setValues(concatInfo)
    },[])
    useEffect(() => {
        setTimer(timerIndicate)
        if(timerIndicate === 0 ){
            unlockCardfunc()
        }
    }, [timerIndicate]);

    useEffect(() => {
       setTimeout(()=>{
        setCards([...Array(16).keys()].map(n => false))
       },setting.speed)
       stop()
    }, []);
    
    useEffect(() => {
        if(finish){
            finishGame()
        }
    }, [finish]);
    const blockCardFunc = (items)=>{
        let block1 = values[items[Math.floor(Math.random()*items.length)]]
        let block2 = values[items[Math.floor(Math.random()*items.length)]]
        block1.block = true
        block2.block = true
        setBlockCards([block1,block2])
    }
    const unlockCardfunc = () =>{
        blockCards[0].block = false
        blockCards[1].block = false
        setBlockCards([])
        stop()
    }
    const finishGame = ()=>{
        if(cards.find(el=>!el) === undefined){
            setIsWin(true)
        }
    }
    
    const clickHandler = (key) => {     
        if(finish)return
        let newCards = [...cards];
        let newSelected = [...selected];
        let newHits = hits;                            
        if(values[key].allow || values[key].active ){
            return
        } else  if(newSelected.length > 1){
            if(values[newSelected[0]] === values[newSelected[1]]){
                return
            }
        }
        values[key].active = true
       
        if(newSelected.length > 1) {
            newHits++;
            setStars(prev=>{
                if(prev === 0 ){
                    return 0
                }else{
                    return prev - 1
                }
            })
            setScore(prev=>{
                if(prev>=0 && prev<setting.hitPoint){
                    return 0
                }else{
                    return prev - setting.hitPoint
                }
            })
            newCards[newSelected[0]] = false;
            newCards[newSelected[1]] = false;
            values[newSelected[0]].active = false
            values[newSelected[1]].active = false
            
            newSelected = [];
        }
        newCards[key] = true;
        newSelected.push(key);
        let block1
        let block2
        if(newSelected.length > 1 && 
           values[newSelected[0]].id === values[newSelected[1]].id
          ) {
            if(values[newSelected[0]].Occupation === '+1'){
                setStars(prev=>{
                    if(prev === 3 ){
                        return 3
                    }else{
                        return prev + 1
                    }
                })
            }
           
            if(values[newSelected[0]].Occupation === 'BOOM'){
                let items = [...Array(cards.length).keys()].filter(el=>!cards[el])
                if(items.length>0){
                    blockCardFunc(items)
                    start()
                }
            }
            setScore(prev=>prev+=setting.wrightPoint)
            values[newSelected[0]].allow = true
            values[newSelected[1]].allow = true
            newSelected = [];
        }
        
            setCards(newCards)
            setSelected(newSelected)
            setHits(newHits)
            console.log(newCards.filter(el=>!el).length)
            if(newCards.filter(el=>!el).length === 0){
                setFinish(true)
            }
      }
    return (
        <>
            {finish?<Finish finish={finish} isWin={isWin} score={score} setPage={setPage}/>:null}
            {
                values
                ?(<>
                    <div className="tray-box">
                        <Tray timer={timer} cards={cards} values={values}  clickHandler={clickHandler} />
                    </div>
                    <div className="star-box">
                        <Stars stars={stars}/>
                        <button className="replay" onClick={()=>setFinish(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 358.56"><path fill-rule="nonzero" d="M246.13 236.01h19.76v28.57h-19.76v-28.57zM77.01 26.22h15.26V14.41C92.27 6.48 98.75 0 106.67 0c7.93 0 14.41 6.53 14.41 14.41v11.81h270.4V14.41c0-7.93 6.48-14.41 14.41-14.41 7.92 0 14.4 6.52 14.4 14.41v11.81h15.26c3.99 0 7.61 1.64 10.2 4.23l1.11 1.29c1.96 2.47 3.13 5.58 3.13 8.92v112.36c0 3.96-1.63 7.6-4.24 10.2-2.6 2.61-6.22 4.24-10.2 4.24h-15.26v38.56h.44c3.36 0 6.27 1.91 7.7 4.71l82.31 134.69c2.48 4.06 1.19 9.37-2.88 11.85-1.4.86-2.95 1.27-4.49 1.28l-494.72.01c-4.78 0-8.65-3.88-8.65-8.65 0-1.81.55-3.48 1.5-4.86l76.75-134.63c1.58-2.79 4.5-4.36 7.5-4.37h6.52v-38.59H77.01c-3.93 0-7.55-1.62-10.19-4.26a14.274 14.274 0 0 1-4.25-10.18V40.66c0-3.96 1.62-7.55 4.23-10.16l.05-.05c2.62-2.62 6.24-4.23 10.16-4.23zM420.29 230.5v59.19h-28.81v-66.37h-270.4v66.37H92.27v-66.37h-1.53L23.51 341.26h464.47L420.29 230.5zm-28.81-24.47v-38.57h-270.4v38.59l270.4-.02zm-145.35 81.13h19.76v36.74h-19.76v-36.74z"/><path fill="#EF4136" d="M76.73 37.34h358.54c1.83 0 3.32 1.51 3.32 3.32v112.36c0 1.81-1.51 3.32-3.32 3.32H76.73c-1.81 0-3.32-1.49-3.32-3.32V40.66c0-1.83 1.49-3.32 3.32-3.32z"/><path fill="#fff" fill-rule="nonzero" d="M159.98 103.56h-14.2v19.37h-16.7V70.74h34.24l-2.09 11.8h-15.45v10.13h14.2v10.89zm11.49 19.37V70.74h16.7v52.19h-16.7zm58.83 0-12.78-18.54c-.44-.61-.72-1.94-.84-4h-.33v22.54h-16.7V70.74h15.7l12.78 18.54c.44.61.72 1.95.83 4.01h.34V70.74H246v52.19h-15.7zm27.19 0V70.74h16.7v52.19h-16.7zm26.09-.92 2.34-12.22c5.12 1.29 9.73 1.93 13.82 1.93s7.39-.17 9.9-.5v-5.74l-7.52-.67c-6.79-.61-11.45-2.24-13.99-4.88-2.53-2.65-3.8-6.56-3.8-11.74 0-7.12 1.55-12.02 4.64-14.69 3.09-2.68 8.34-4.02 15.74-4.02s14.08.7 20.04 2.09l-2.09 11.81c-5.17-.84-9.32-1.26-12.44-1.26-3.12 0-5.76.14-7.93.42v5.65l6.01.59c7.3.72 12.34 2.46 15.12 5.22 2.78 2.76 4.17 6.58 4.17 11.48 0 3.51-.47 6.47-1.42 8.9-.94 2.42-2.07 4.25-3.38 5.5-1.31 1.26-3.16 2.22-5.55 2.89-2.4.67-4.5 1.07-6.31 1.21-1.81.14-4.21.21-7.22.21-7.24 0-13.95-.73-20.13-2.18zm82.64.92v-16.89h-12.53v16.89h-16.7V70.74h16.7v16.9h12.53v-16.9h16.7v52.19h-16.7z"/></svg>
                        </button>
                    </div>
                    <div className="info-box">
                        <div className="left-bar">
                            <Rating/>
                        </div>
                        <div className="right-bar">
                            <Timer setting={setting} setFinish={setFinish}/>
                            <Score score={score}/>
                        </div>
                    </div>
                </>)
                :null
            }
           
        </>
    );
}

export default GamePlay;
