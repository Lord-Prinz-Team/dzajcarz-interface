import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Divider from "./Divider";
import Message from "./Message";

const Chat = () => {
  const { chatId: id } = useParams();
  const [messages, setMessages] = useState([]);
  const [messagesAmount, setMessagesAmount] = useState();
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
        setMessagesAmount(data.results);
        setMessages(data.data.chat);
      });
  }, [id]);

  let isSamePrevUser = false;
  let isSameNextUser = false;
  let prevUser = null;
  let nextUser = null;

  let nextDate = null;
  let isSameDay = false;

  let currentMessageDate = null;

  return (
    <div ref={chat} className="content-list">
      {messages.map((message, index) => {
        prevUser = messages[index - 1]?.author?._id;
        isSamePrevUser = prevUser === messages[index].author._id;

        nextUser = messages[index + 1]?.author?._id;
        isSameNextUser = nextUser === messages[index].author._id;

        currentMessageDate = message.timestamp;
        nextDate = messages[index + 1]?.timestamp;

        isSameDay = nextDate - currentMessageDate > 60 * 36000;

        return (
          <>
            {isSameDay && <Divider timestamp={message.timestamp} key={index} />}
            <Message
              key={message._id}
              isLastMessage={index === messagesAmount - 1}
              profilePicture={
                isSamePrevUser && !isSameDay ? "" : message.author.avatar
              }
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
