import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import Divider from "./Divider";
import Message from "./Message";

const Chat = () => {
	const socket = useRef();
	const { chatId: id } = useParams();
	const [messages, setMessages] = useState([]);
	const [messagesAmount, setMessagesAmount] = useState();

	const isSameDate = (date1, date2) => {
		const d1 = new Date(date1);
		const d2 = new Date(date2);

		const day1 = d1?.getDate();
		const month1 = d1?.getMonth();
		const year1 = d1?.getFullYear();

		const day2 = d2?.getDate();
		const month2 = d2?.getMonth();
		const year2 = d2?.getFullYear();

		return day1 === day2 && month1 === month2 && year1 === year2;
	};

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
				setMessagesAmount(data.results);
				setMessages(data.data.chat);
			});
	}, [id]);

	useEffect(() => {
		socket.current = io("ws://localhost:2137");
	}, []);

	useEffect(() => {
		socket.current.on("messageCreate", (message) => {
			if (message.chat !== id) {
				return;
			}
			setMessages((prevState) => [...prevState, message]);
			setMessagesAmount((prevState) => prevState + 1);

			if (message.chat === id) {
				return;
			}

			console.log(message.author.tag);
		});

		return () => {
			socket.current.removeListener("messageCreate");
		};
	}, [id]);

	let isSamePrevUser = false;
	let isSameNextUser = false;
	let prevUser = null;
	let nextUser = null;

	let nextDate = null;
	let isSameDay = false;

	let currentMessageDate = null;

	return (
		<div className="content-list">
			{messages.map((message, index) => {
				prevUser = messages[index - 1]?.author?._id;
				isSamePrevUser = prevUser === messages[index].author._id;

				nextUser = messages[index + 1]?.author?._id;
				isSameNextUser = nextUser === messages[index].author._id;

				currentMessageDate = message.timestamp;
				nextDate = messages[index - 1]?.timestamp;

				isSameDay = !isSameDate(currentMessageDate, nextDate);

				return (
					<>
						{isSameDay && <Divider timestamp={message.timestamp} key={index} />}
						<Message
							key={message._id}
							isLastMessage={index === messagesAmount - 1}
							profilePicture={isSamePrevUser && !isSameDay ? "" : message.author.avatar}
							attachments={message.attachments}
							username={message.author.tag.split("#")[0]}
							textContent={message.content}
							timestamp={message.timestamp}
							isSameNextUser={isSameNextUser && !isSameDay}
						/>
					</>
				);
			})}
		</div>
	);
};

export default Chat;
