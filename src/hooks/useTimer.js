import { useState, useEffect, useRef} from "react"
export default function useTimer (delay, time ) {

    const [timerIndicate, setTimerIndicate] = useState(time)

    const timeOutRef = useRef(null)

    const  start = ()=>{
    	let passedTime 
		let startTime = Date.now()
    	timeOutRef.current = setTimeout(()=>{
                passedTime = Math.round((Date.now() - startTime)/1000)
                setTimerIndicate((prev)=>prev>0?prev-=passedTime:(stop(),0))
                start()
    	}, 1000)
    }
   
    const stop = () =>{
        clearTimeout(timeOutRef.current)
        timeOutRef.current = null
    }
    
    useEffect(()=>{
        start(time)
    },[])
    return{
        timerIndicate,
        start,
        stop
    }
}