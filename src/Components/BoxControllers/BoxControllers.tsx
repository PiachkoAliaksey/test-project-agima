import React, { useContext, useEffect, useRef } from "react";
import './style.scss';
import iconBack from '../../assets/rewind-back.svg';
import iconNext from '../../assets/rewind-next.svg';
import iconPauseStream from '../../assets/pause-stream.svg';
import iconPlayStream from '../../assets/play-stream.svg';
import { UserContext } from "../../App";
import FormButton from "../../Form/ButtonForm/ButtonForm";
import { trackList } from "../../api/api";





const BoxControllers: React.FC = () => {
    const data = useContext(UserContext);
    const exampleRef = useRef<HTMLLIElement>(null);

    const handlerClickAction = async () => {
        if (data?.isPlay) {
            data?.audioObject.src.pause();
            data?.setIsPlay(prev => !prev);
            exampleRef.current!.style.backgroundColor = 'rgba(12, 182, 115, 0.5)';
        } else {
            await data?.audioObject.src.play();
            data?.setIsPlay(prev => !prev);
            exampleRef.current!.style.backgroundColor = 'rgb(12, 182, 100)';
        }
    }

    const handlerClickPrev = () => {
        data?.audioObject.src.pause();
        data?.setIsPlay(false)
        exampleRef.current!.style.backgroundColor = 'rgba(12, 182, 115, 0.5)';
        data?.setCurrentTrack(prev => {
            if (prev === 0) {
                return trackList.length - 1
            } else {
                return prev - 1
            }
        })
    }

    const handlerClickNext = () => {
        data?.audioObject.src.pause();
        data?.setIsPlay(false);
        exampleRef.current!.style.backgroundColor = 'rgba(12, 182, 115, 0.5)';
        data?.setCurrentTrack(prev => {
            if (prev === trackList.length - 1) {
                return 0
            } else {
                return prev + 1
            }
        })
    }

    useEffect(() => {
        if (data?.audioObject.src.ended) exampleRef.current!.style.backgroundColor = 'rgba(12, 182, 115, 0.5)';
    }, [data?.isPlay])

    return (
        <section className="box-controllers">
            <ul className="box-items-controller">
                <FormButton onClick={() => handlerClickPrev()} key='iconBack'><img src={iconBack} /></FormButton>
                <FormButton innerRef={exampleRef} onClick={() => handlerClickAction()} key='iconPlayPauseStream'>
                    <img src={data?.isPlay ? (iconPlayStream) : (iconPauseStream)} />
                </FormButton>
                <FormButton onClick={() => handlerClickNext()} key='iconNext'><img src={iconNext} /></FormButton>
            </ul>
        </section>
    )
}

export default BoxControllers;