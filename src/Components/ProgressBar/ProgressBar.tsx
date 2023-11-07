import React, { useContext, useEffect, useRef } from "react";
import { UserContext } from "../../App";

import './style.scss';



const ProgressBar: React.FC = () => {
    const data = useContext(UserContext);
    const refDiv = useRef<HTMLDivElement>(null);
    const refSpan = useRef<HTMLSpanElement>(null);

    let dataInterval: number;


    const handlerMoveTouchProgress = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        let width = refDiv.current?.clientWidth;
        const offset = e.nativeEvent.offsetX;
        const divProgress = offset / width! * 100;
        data!.audioObject.src.currentTime = divProgress / 100 * data!.audioObject.src.duration;
        refSpan.current!.style.width = `${divProgress}%`;
    }


    useEffect(() => {
        if (data!.audioObject.src.ended) {
            clearInterval(dataInterval);
            data?.setIsPlay(prev => !prev);
            if (data!.audioObject.src.currentTime !== 0) data!.audioObject.src.currentTime = 0;
            refSpan.current!.style.width = `0%`;
        }
    }, [data!.audioObject.src.ended])

    useEffect(() => {
        if (data?.isPlay) {
            // if (data!.audioObject.src.currentTime !== 0) data!.audioObject.src.currentTime = 0;
            dataInterval = setInterval(() => {
                refSpan.current!.style.width = `${data!.audioObject.src.currentTime / data!.audioObject.src.duration * 100}%`;
            }, 500)
        } else {
            clearInterval(dataInterval);
        }
    }, [data?.isPlay])


    useEffect(() => {
        clearInterval(dataInterval);
        if (data!.audioObject.src.currentTime !== 0) data!.audioObject.src.currentTime = 0
        refSpan.current!.style.width = `0%`
    }, [data?.currentTrack])


    return (
        <section className="box-progress">
            <div className={`progress-bar ${data?.isPlay ? ('progress-bar-anim') : ('')}`}>
                <div ref={refDiv} onClick={(e) => handlerMoveTouchProgress(e)} className="fillBarProgress">
                    <span ref={refSpan} className="fillColorProgressBar"></span>
                </div>
            </div>
        </section>
    )
}

export default ProgressBar;