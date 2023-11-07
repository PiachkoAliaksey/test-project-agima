import React, { useState, useContext } from "react";
import volumeCross from '../../assets/volume-cross.svg';
import volumeLoud from '../../assets/volume-loud.svg';
import { UserContext } from "../../App";

import './style.scss';



const VolumeBox: React.FC = () => {
    const data = useContext(UserContext);
    const [currentVolume, setCurrentVolume] = useState(data?.audioObject.src.volume! * 100);
    const [percentageValue, setPercentageValue] = useState(data?.audioObject.src.volume! * 100);

    const handlerMoveThumb = (e: React.SyntheticEvent<HTMLInputElement>) => {
        e.preventDefault();
        const value = e.currentTarget.value;
        const valueMax = e.currentTarget.max;
        data!.audioObject.src.volume = +value / 100;
        const percentage = (+value / +valueMax) * 100;
        setPercentageValue(percentage);
        setCurrentVolume(+e.currentTarget.value);
    }

    return (
        <section className="box-volume">
            <img src={volumeCross} alt='volumeCross' />
            <div className="volume-bar">
                <input onChange={(e) => handlerMoveThumb(e)} className='animated-input' type='range' min='0' max='100' value={currentVolume} step="5" />
                <span style={{ left: `${(currentVolume / 108) * 100}%` }} className='custom-thumb-range'></span>
                <div className="fillBar">
                    <span style={{ width: `${percentageValue}%` }} className="fillColor"></span>
                </div>
            </div>
            <img src={volumeLoud} alt='volumeLoud' />
        </section>
    )
}

export default VolumeBox;
