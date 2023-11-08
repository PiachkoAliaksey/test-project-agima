
import React, { useState, createContext, useEffect } from 'react';
import LeftPartMusicPlayer from './Components/MusicPlayer/LeftPartMusicPlayer';
import RightPartMusicPlayer from './Components/RightPartMusicPlayer/RightPartMusicPlayer';

import { trackList } from './api/api';

import './App.scss';


export interface IUseContext {
  isPlay: boolean,
  setIsPlay: React.Dispatch<React.SetStateAction<boolean>>,
  audioObject: {
    src: HTMLAudioElement;
    title: string;
    img: string
  },
  setAudioObject: React.Dispatch<React.SetStateAction<{
    src: HTMLAudioElement;
    title: string;
    img: string;
  }>>,
  currentTrack: number,
  setCurrentTrack: React.Dispatch<React.SetStateAction<number>>,
}

export const UserContext = createContext<IUseContext | null>(null);


function App() {
  const [audioObject, setAudioObject] = useState(trackList[0]);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlay, setIsPlay] = useState(false);

  useEffect(() => {
    setAudioObject(trackList[currentTrack]);
  }, [currentTrack])


  return (
    <>
      <UserContext.Provider value={{ audioObject, setAudioObject, isPlay, setIsPlay, currentTrack, setCurrentTrack }}>
        <div className='box-container-player'>
          <LeftPartMusicPlayer />
          <RightPartMusicPlayer />
        </div>
      </UserContext.Provider>
    </>
  )
}

export default App
