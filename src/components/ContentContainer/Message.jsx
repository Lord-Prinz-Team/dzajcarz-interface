import { useEffect, useRef } from "react";
import AudioAttachment from "../Attachments/AudioAttachment";
import ImageAttachment from "../Attachments/ImageAttachment";
import OtherAttachment from "../Attachments/OtherAttachment";
import VideoAttachment from "../Attachments/VideoAttachment";

const Message = ({
  profilePicture,
  attachments,
  username,
  textContent,
  timestamp,
  isLastMessage,
}) => {
  const IMAGE_FORMAT = ["image/png", "image/jpeg", "image/gif"];
  const VIDEO_FORMAT = [
    "video/quicktime",
    "video/mp4",
    "video/mpeg",
    "video/ogg",
  ];

  const lastMessage = useRef();

  useEffect(() => {
    lastMessage?.current?.scrollIntoView();
  }, []);

  const AUDIO_FORMAT = ["audio/mpeg"];

  const chooseCorrectDateForm = (timestamp) => {
    const date = new Date(timestamp);
    const currentDate = new Date();

    const year = date.getFullYear();
    const month =
      date.getMonth() + 1 < 10
        ? `0${date.getMonth() + 1}`
        : date.getMonth() + 1;
    const day =
      date.getDay() + 1 < 10 ? `0${date.getDay() + 1}` : date.getDay() + 1;
    const hours =
      date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minutes =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

    if (
      currentDate.getDay() + 1 === +day &&
      currentDate.getMonth() + 1 === +month &&
      currentDate.getFullYear() === +year
    ) {
      return `Dziś o ${hours}:${minutes}`;
    }

    if (
      currentDate.getDay() + 2 === +day &&
      currentDate.getMonth() + 1 === +month &&
      currentDate.getFullYear() === +year
    ) {
      return `Wczoraj o ${hours}:${minutes}`;
    }

    return `${day}.${month}.${year}`;
  };

  return (
    <>
      <div
        ref={isLastMessage ? lastMessage : null}
        className={"post select-text"}
      >
        <div className="avatar-wrapper">
          <img
            src={profilePicture}
            alt={`${username} profile picture`}
            className="avatar select-none max-w-none"
          />
        </div>

        <div className="post-content">
          <p className="post-owner">
            {username}
            <small className="timestamp">
              {chooseCorrectDateForm(timestamp)}
            </small>
          </p>
          <p className="post-text">{textContent}</p>
          {attachments.lenth === 0
            ? ""
            : attachments.map((attachment) => {
                if (IMAGE_FORMAT.includes(attachment.contentType)) {
                  return (
                    <ImageAttachment
                      key={attachment._id}
                      src={attachment.proxyURL}
                      name={attachment.name}
                      height={attachment.height}
                      width={attachment.width}
                    />
                  );
                }
                if (VIDEO_FORMAT.includes(attachment.contentType)) {
                  return (
                    <VideoAttachment
                      key={attachment._id}
                      name={attachment.name}
                      height={attachment.height ?? ""}
                      src={attachment.proxyURL}
                    />
                  );
                }
                if (AUDIO_FORMAT.includes(attachment.contentType)) {
                  return (
                    <AudioAttachment
                      name={attachment.name}
                      size={attachment.size}
                      key={attachment._id}
                      url={attachment.url}
                    />
                  );
                }

                return (
                  <OtherAttachment
                    name={attachment.name}
                    size={attachment.size}
                    key={attachment._id}
                    url={attachment.url}
                  />
                );
              })}
        </div>
      </div>
    </>
  );
};

export default Message;
