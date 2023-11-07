import React, { useContext } from "react";
import bgImg from '../../assets/Logo.svg';
import BoxControllers from "../BoxControllers/BoxControllers";
import VolumeBox from "../VolumeBox/VolumBox";
import ProgressBar from "../ProgressBar/ProgressBar";
import { UserContext } from "../../App";

import './style.scss';


const LeftPartMusicPlayer: React.FC = () => {
    const data = useContext(UserContext);


    return (
        <section className="left-part-music-player">
            <img className="bg-img" src={bgImg} alt='img-background' />
            <BoxControllers />
            <section className="box-output-information">
                <VolumeBox />
                <h2>{data?.audioObject.title}</h2>
                <ProgressBar />
            </section>
        </section>
    )
}

export default LeftPartMusicPlayer;