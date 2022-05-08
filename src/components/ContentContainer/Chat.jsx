import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Message from "./Message";

const Chat = () => {
	const { chatId: id } = useParams();
	const [messages, setMessages] = useState([]);
	const chat = useRef();

	useEffect(() => {
		const fetchData = async () => {
			return await fetch(`http://localhost:4761/chat/${id}`);
		};

		fetchData()
			.then((response) => response.json())
			.then((data) => {
				if (data.status !== "success") {
					return;
				}
				setMessages(data.data.chat);
			});
	}, [id]);

	return (
		<div ref={chat} className="content-list">
			{messages.map((message) => {
				return (
					<Message
						key={message._id}
						profilePicture={message.author.avatar}
						attachments={message.attachments}
						username={message.author.tag.split("#")[0]}
						textContent={message.content}
						timestamp={message.timestamp}
					/>
				);
			})}
		</div>
	);
};

export default Chat;
