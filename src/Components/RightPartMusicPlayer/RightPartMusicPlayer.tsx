import React, { useContext} from "react";
import './style.scss';

import { UserContext } from "../../App";



const RightPartMusicPlayer: React.FC = () => {
    const data = useContext(UserContext);

    return (
        <section className="right-part-music-player">
            <img className={`image-music ${data?.isPlay ? ('animationDiscImg') : ('')}`} src={data?.audioObject.img} alt='music-photo' />
        </section>
    )
}

export default RightPartMusicPlayer;