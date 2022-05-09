import { useState } from "react";
import Modal from "../UI/Modal";

const ImageAttachment = (props) => {

	const [isFullMode, setIsFullMode] = useState(false);

	const updateFullModeHandler = () => {
		setIsFullMode((state => {
			return !state;
		}))
	}

	return (
		<>
			<img
				src={props.src}
				alt={props.name}
				className="mt-3 w-full max-w-2xl cursor-pointer"
				{...props}
				onClick={updateFullModeHandler}
			/>

		{isFullMode && <Modal src={props.src} onClick={updateFullModeHandler}>
				<img
					src={props.src}
					alt={props.name}
					width={props.width}
					height={props.height}
					{...props}
				/>
			</Modal>
		}
		</>
	);
};

export default ImageAttachment;
