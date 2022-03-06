import { memo } from 'react';
import './style.css'

const Card = ({value,active,clicked,timer}) => {

    let Cardclasses = ["flip-card"];
    let CardBlockclasses = ["cards_la_casa__block"];

    if(active){
        Cardclasses.push("active");
    }
    if(value.allow){
        Cardclasses.push("allow");
    }
    if(value.block){
        CardBlockclasses.push("active");
    }

    return (
        <div className='la-casa-game__cards cards_la_casa'>
            <div className='cards_la_casa__box'>
                <div className={CardBlockclasses.join(" ")}>
                    {timer? new Date(timer * 1000).toISOString().substr(14, 5):null}
                </div>
                <div className={Cardclasses.join(" ")} onClick={clicked}>
                    <div className="flip-card-inner">

                        <div className="flip-card-front">
                        <div className="element-back-overlay" style={{backgroundImage:`url('https://render.fineartamerica.com/images/rendered/default/greeting-card/images/artworkimages/medium/2/bella-ciao-cindy-three-transparent.png?&targetx=57&targety=44&imagewidth=386&imageheight=611&modelwidth=500&modelheight=700&backgroundcolor=000000&orientation=1')`,backgroundPosition:"center center",backgroundSize:"cover"}}>
                            <div className="elem-overlay-opac"></div>
                        </div>
                        <div className="flip-front-content">
                            <div className="icon-flip-card-box" >
                                <div className="icon-flip-card" >
                                    {/* <svg width="64" height="64" viewBox="0 0 32 32" ><path d="M16 22c3.86 0 7-3.14 7-7v-8c0-3.86-3.14-7-7-7s-7 3.14-7 7v8c0 3.86 3.14 7 7 7zM16 2c2.757 0 5 2.243 5 5h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1h2v1h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1h2v1h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1h2c0 2.756-2.243 5-5 5s-5-2.243-5-5h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2v-1h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2v-1h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2c0-2.757 2.243-5 5-5zM26 11c-0.552 0-1 0.448-1 1v3c0 4.962-4.037 8.999-8.998 9-0 0-0.001 0-0.002 0s-0.001 0-0.002 0c-4.962-0.001-8.998-4.038-8.998-9v-3c0-0.552-0.448-1-1-1s-1 0.448-1 1v3c0 5.728 4.402 10.445 10 10.953v4.047h-4.497c-0.001 0-0.002 0-0.002 0-0.552 0-1 0.448-1 1s0.448 1 1 1h11c0.552 0 1-0.448 1-1s-0.448-1-1-1c-0.001 0-0.002 0-0.003 0h-4.497v-4.047c5.598-0.507 10-5.224 10-10.953v-3c0-0.552-0.448-1-1-1z"></path>fill:<defs><linearGradient x1="0%" x2="100%" y1="0%" y2="0%" id="8LC3XqZUFb"><stop offset="0%" stop-color="#7049ba"></stop><stop offset="100%" stop-color="#e95095"></stop></linearGradient></defs>;" fill="<defs><linearGradient x1="0%" x2="100%" y1="0%" y2="0%" id="8LC3XqZUFb"><stop offset="0%" stop-color="#7049ba"></stop><stop offset="100%" stop-color="#e95095"></stop></linearGradient></defs>" </svg> */}
                                    <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" ><path fill="#b71c1c" d="M39.097,25.83c-0.875-1.316-1.779-2.678-2.107-4.972C35.934,13.463,34,6,28,6 c-1.371,0-2.352,0.406-3.069,0.703C24.547,6.862,24.215,7,24,7s-0.547-0.138-0.931-0.297C22.352,6.406,21.371,6,20,6 c-6,0-7.934,7.463-8.99,14.858c-0.328,2.294-1.232,3.655-2.107,4.972C7.967,27.237,7,28.693,7,31c0,3.259,1.124,5.537,4.293,8.707 C15.195,43.609,19.383,45,22,45h4c2.617,0,6.805-1.391,10.707-5.293C39.876,36.537,41,34.259,41,31 C41,28.693,40.033,27.237,39.097,25.83z"/><path fill="#ffcc80" d="M34,21c0-5-0.939-8-5-8c-2,0-3,2-5,2s-3-2-5-2c-4.061,0-5,3-5,8c0,2-1,3-1,5c0,3,2,4.777,2,7 c0,2,0.02,4.02,1,5c2,2,4,6,6,6c1.08,0,1.601,0,2,0s0.92,0,2,0c2,0,4-4,6-6c0.98-0.98,1-3,1-5c0-2.223,2-4,2-7C35,24,34,23,34,21z"/><path fill="#ff7043" d="M20.5,38.7l-0.9-1.8c0.1,0,1.8-0.9,4.4-0.9s4.4,0.9,4.4,0.9l-0.9,1.8c0,0-1.4-0.7-3.6-0.7 C22,38,20.6,38.7,20.5,38.7z"/><path fill="#010100" d="M14,9v8h20V9c0,0-2-4-10-4S14,9,14,9z"/><path fill="#ffe0b2" d="M29,10c-2,0-3,3-5,3s-3-3-5-3c-3,0-5,3-5,8v2c0,0,1-4,4-4c2,0,4,5,4,5s1,2,1,4c0,5-2,5-2,6s2,2,3,2 s3-1,3-2s-2-1-2-6c0-2,1-4,1-4s2-5,4-5c3,0,4,4,4,4v-2C34,14,32,10,29,10z"/><path fill="#fff" d="M22,25c0,0-1-3-4-3c-2,0-2,2-2,2s0,2,2,2S22,25,22,25z"/><path fill="#010100" d="M19 23A1 1 0 1 0 19 25A1 1 0 1 0 19 23Z"/><path fill="#fff" d="M26,25c0,0,1-3,4-3c2,0,2,2,2,2s0,2-2,2S26,25,26,25z"/><path fill="#010100" d="M29 23A1 1 0 1 0 29 25A1 1 0 1 0 29 23Z"/><path d="M26 20c0-1 2.375-5 4.375-5 3 0 3.625 5 3.625 5s-1.25-3-3.25-3C29 17 28 21 27 21S26 20 26 20zM22 20c0-1-2.375-5-4.375-5-3 0-3.625 5-3.625 5s1.25-3 3.25-3C19 17 20 21 21 21S22 20 22 20z"/><path fill="#dd2c00" d="M43,32c0-4-2-6-4-12C35.594,9.782,34,2,24,2S12.406,9.782,9,20c-2,6-4,8-4,12c0,6,8,11,8,11s4,3,8,3 c3,0,3,0,6,0c4,0,8-3,8-3S43,38,43,32z M22,44c-2,0-6-1-10-5c-3-3-4-5-4-8c0-4,3.279-4.952,4-10c1-7,3-14,8-14c2,0,3,1,4,1s2-1,4-1 c5,0,7,7,8,14c0.721,5.048,4,6,4,10c0,3-1,5-4,8c-4,4-8,5-10,5C25,44,22.965,44,22,44z"/><path d="M30,29c0-0.875,0.992-0.875,0.992-2.5l0-0.006c-0.009-0.272-0.236-0.485-0.507-0.476c-0.263,0.008-0.477,0.223-0.477,0.483 c0,1-1.008,1.375-1.008,2.5c0,1.25,0.625,1.5,0.625,2.5c0,0.459-0.219,1.5-1.625,1.5h-8c-1.406,0-1.625-1.041-1.625-1.5 c0-1,0.625-1.25,0.625-2.5c0-1.125-1.008-1.5-1.008-2.5c0-0.26-0.214-0.475-0.477-0.483c-0.272-0.008-0.499,0.205-0.507,0.476 l0,0.006c0,1.625,0.992,1.625,0.992,2.5c0,0.75-1,1.375-1,2.625C17,34.75,19.75,35,20.75,35s5.5,0,6.5,0S31,34.75,31,31.625 C31,30.375,30,29.75,30,29z"/></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card-back" style={{backgroundImage: `url('${value.img}')`}}>
                        <div className="element-back-overlay">
                            <div className="elem-overlay-opac" ></div>
                        </div>

                        <div className="flip-back-content">
                            <h2>{value.name}</h2>
                            <p>{value.Occupation}</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(Card);
