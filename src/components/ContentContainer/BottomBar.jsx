import { useState } from "react";
import {
	BsPlusCircleFill,
	BsFillEmojiWinkFill,
	BsFillEmojiSmileFill,
} from "react-icons/bs";
import { useParams } from "react-router-dom";
import Input from "./Input";

const BottomBar = () => {
	const { chatId: id } = useParams();
	const [content, setContent] = useState("");
	const [attachments, setAttachments] = useState([]);

	const sendMessage = async ({ id, attachments, content }) => {
		const message = {
			id,
			content,
			attachments,
		};

		const result = await fetch(`http://localhost:4761/chat/${id}`, {
			body: JSON.stringify(message),
			method: "POST",
			headers: { "Content-Type": "application/json" },
		});

		return result.ok;
	};

	const saveText = (text) => {
		setContent(text);
	};

	const validateInput = (text) => {
		return text.trim().length > 0;
	};

	const submitHandler = (event) => {
		event.preventDefault();
		if (!validateInput(content)) {
			return;
		}

		const result = sendMessage({
			id,
			content,
			attachments,
		});

		if (!result) {
			console.log("Somthing went wrong!");
			return;
		}

		setContent("");
	};

	return (
		<div className="fixed bg-gray-700 bottom-0 w-full h-16">
			<form className="bottom-bar select-none" onSubmit={submitHandler}>
				<PlusIcon />
				<Input onType={saveText} value={content} />
				<GifIcon />
				<EmojiIcon />
			</form>
		</div>
	);
};

const PlusIcon = () => (
	<BsPlusCircleFill
		size="22"
		className="text-gray-400 dark:shadow-lg mx-2 dark:text-primary cursor-pointer hover:text-gray-400"
	/>
);

const EmojiIcon = () => (
	<BsFillEmojiSmileFill
		size="25"
		className="text-gray-400 dark:shadow-lg mx-2 dark:text-primary cursor-pointer"
	/>
);

const GifIcon = () => (
	<svg
		width="26"
		height="26"
		aria-hidden="false"
		viewBox="0 0 24 24"
		className="text-gray-400 dark:shadow-lg mx-2 dark:text-primary cursor-pointer"
	>
		<path
			fill="currentColor"
			d="M2 2C0.895431 2 0 2.89543 0 4V20C0 21.1046 0.89543 22 2 22H22C23.1046 22 24 21.1046 24 20V4C24 2.89543 23.1046 2 22 2H2ZM9.76445 11.448V15.48C8.90045 16.044 7.88045 16.356 6.74045 16.356C4.11245 16.356 2.66045 14.628 2.66045 12.072C2.66045 9.504 4.23245 7.764 6.78845 7.764C7.80845 7.764 8.66045 8.004 9.32045 8.376L9.04445 10.164C8.42045 9.768 7.68845 9.456 6.83645 9.456C5.40845 9.456 4.71245 10.512 4.71245 12.06C4.71245 13.62 5.43245 14.712 6.86045 14.712C7.31645 14.712 7.64045 14.616 7.97645 14.448V12.972H6.42845V11.448H9.76445ZM11.5481 7.92H13.6001V16.2H11.5481V7.92ZM20.4724 7.92V9.636H17.5564V11.328H19.8604V13.044H17.5564V16.2H15.5164V7.92H20.4724Z"
		></path>
	</svg>
);

export default BottomBar;
