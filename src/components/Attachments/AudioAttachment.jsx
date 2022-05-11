import {
  BsFillFileEarmarkMusicFill,
  BsDownload,
  BsFillPlayFill,
  BsFillPauseFill,
  BsArrowRepeat,
} from "react-icons/bs";
import { useRef, useState } from "react";

const AudioAttachment = ({ name, size, url }) => {
  const download = (url) => {
    window.location = url;
  };

  const audio = useRef();
  const seek = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [maxTime, setMaxTime] = useState("0:00");
  const [currentTime, setCurrentTime] = useState("0:00");

  const swapPlayingState = () => {
    setIsPlaying((state) => {
      return !state;
    });
  };

  const play = () => {
    audio.current.play();
    setIsEnded(false);
  };

  const pause = () => {
    audio.current.pause();
  };

  const AudioPlayHandler = () => {
    if (isPlaying) {
      pause();
      swapPlayingState();
      return;
    }

    play();
    swapPlayingState();
  };

  const EndedMusicHandler = () => {
    swapPlayingState();
    setIsEnded(true);
  };

  const fileSize = size ?? "unknown";

  const convertUnits = (value) => {
    if (isNaN(+value)) {
      return "unknown";
    }
    if (value / (1 * 1000) < 1) {
      return `${value} B`;
    }
    if (value / (1 * 1000 * 1000) < 1) {
      return `${Math.ceil(value / 1000)} KB`;
    }
    if (value / (1 * 1000 * 1000 * 1000) < 1) {
      return `${Math.ceil(value / (1000 * 1000))} MB`;
    }
    return `${Math.ceil(value / (1000 * 1000 * 1000))} GB`;
  };

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
  };

  return (
    <div className="flex self-start flex-col gap-2  p-3 border-solid border border-gray-900 bg-gray-800 rounded-md">
      <div className="flex gap-3 items-center">
        <div>
          <BsFillFileEarmarkMusicFill size="42" className="text-gray-400" />
        </div>
        <div className="flex flex-col">
          <span
            className="text-lg text-blue-400 cursor-pointer"
            onClick={download.bind(null, url)}
          >
            {name}
          </span>
          <span className="text-xs text-gray-500">
            {convertUnits(fileSize)}
          </span>
        </div>
        <div>
          <BsDownload
            size="22"
            className="text-gray-500 cursor-pointer ml-2"
            onClick={download.bind(null, url)}
          />
        </div>
      </div>
      <div>
        {isEnded ? (
          <BsArrowRepeat
            size="32"
            className="text-gray-400  mx-2 dark:text-primary cursor-pointer"
            onClick={AudioPlayHandler}
          />
        ) : isPlaying ? (
          <BsFillPauseFill
            size="32"
            className="text-gray-400  mx-2 dark:text-primary cursor-pointer"
            onClick={AudioPlayHandler}
          />
        ) : (
          <BsFillPlayFill
            size="32"
            className="text-gray-400  mx-2 dark:text-primary cursor-pointer"
            onClick={AudioPlayHandler}
          />
        )}

        <audio ref={audio} onEnded={EndedMusicHandler}>
          <source src={url} />
        </audio>
        <span>{currentTime}</span>
        <span>/</span>
        <span>{maxTime}</span>
        <input type="range" ref={seek} />
      </div>
    </div>
  );
};

export default AudioAttachment;
