import { useEffect, useRef, useState } from "react";
import {
	BsFillPauseFill,
	BsFillPlayFill,
	BsFillPlayCircleFill,
	BsPauseCircleFill,
} from "react-icons/bs";

const VideoAttachment = (props) => {
	const video = useRef();

	const [isPlaying, setIsPlaying] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	const play = () => {
		video.current.play();
	};

	const pause = () => {
		video.current.pause();
	};

	const swapPlayingState = () => {
		setIsPlaying((state) => {
			return !state;
		});
	};

	const videoPlayHandler = () => {
		if (isPlaying) {
			pause();
			swapPlayingState();
			return;
		}

		play();
		swapPlayingState();
	};

	return (
		<div
			className="relative max-w-xl"
			onMouseEnter={() => {
				setIsHovered(true);
			}}
			onMouseLeave={() => {
				setIsHovered(false);
			}}
		>
			<video
				className="mt-3 max-w-xl max-h-96 self-start"
				{...props}
				ref={video}
				onClick={videoPlayHandler}
			>
				<source src={props.src} />
			</video>{" "}
			{/* <PauseIcon />
			<PlayIcon /> */}
			{isPlaying ? (
				<PauseIconCircle onClick={props.onClick} videoPlayHandler={videoPlayHandler} />
			) : (
				<PlayIconCircle onClick={props.onClick} videoPlayHandler={videoPlayHandler} />
			)}
			{/* {isHovered && <ControlBar />} */}
		</div>
	);
};

const PauseIcon = () => (
	<BsFillPauseFill
		size="25"
		className="text-gray-400 dark:shadow-lg mx-2 dark:text-primary cursor-pointer"
	/>
);

const PlayIcon = () => (
	<BsFillPlayFill
		size="32"
		className="text-gray-400 dark:shadow-lg mx-2 dark:text-primary cursor-pointer"
	/>
);

const PlayIconCircle = (props) => {
	const videoPlayHandler = props.videoPlayHandler;
	useEffect(() => {});
	return (
		<BsFillPlayCircleFill
			onClick={videoPlayHandler}
			size="48"
			className="text-gray-800 mx-2 dark:text-primary cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-fadeAway"
		/>
	);
};

const PauseIconCircle = (props) => {
	const videoPlayHandler = props.videoPlayHandler;

	useEffect(() => {});
	return (
		<BsPauseCircleFill
			onClick={videoPlayHandler}
			size="48"
			className="text-gray-800 mx-2 dark:text-primary cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-fadeAway"
		/>
	);
};

const ControlBar = (props) => {
	return <div className="h-9 w-full bg-slate-100 absolute bottom-0"></div>;
};

export default VideoAttachment;
