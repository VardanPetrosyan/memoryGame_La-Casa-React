import { useRef,useEffect } from "react"
const CreateNewPlayer = ({setPage}) => {
    const playerName = useRef()
    const {current} = useRef(JSON.parse(localStorage.getItem('player')))
    useEffect(() => {
        playerName.current.value = current
    }, []);
    const handleChangePage = (page)=>{
        setPage(page)
    }
    const handleForm = (e)=>{
        e.preventDefault()
        localStorage.setItem('player', JSON.stringify(playerName.current.value));
        setPage('Start')
    }
    return (
        <div className="creatplayer">
            <form className="creatplayer__form" onSubmit={handleForm}>
                    <h2>New Player</h2>
                    <div className="creatinput">
                        <input id="creatinput" type="text"  ref={playerName}/>
                    </div>
                    <div className="creatbuttons">
                        <button className="creatplayerbtn">Ok</button>
                        <button type="button" className="cancelcreatplayerbtn" onClick={()=>handleChangePage('Start')}>Cancel</button>
                    </div>
            </form>
        </div>
    );
}

export default CreateNewPlayer;
