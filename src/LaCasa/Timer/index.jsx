import {useState,useRef,useEffect} from 'react';
import useTimer from '../../hooks/useTimer';
import './style.css'
const Timer = ({setting,setFinish}) => {
    const {timerIndicate,start,stop} = useTimer(setting.delay,setting.time)
    const [timer,setTimer] = useState(timerIndicate)
    useEffect(() => {
        setTimer(timerIndicate)
        if(timerIndicate === 0){
            setFinish(true)
        }
    }, [timerIndicate]);

    
    return (
        <section className="time">
            <div className="timer-box" style={timer<15?{color:"red"}:{color:"green"}} >
                {new Date(timer * 1000).toISOString().substr(14, 5)}
            </div>
		</section>
    );
}

export default Timer;
