import React from "react";

const EachChat = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-header"></div>
      <div className="chat-bubble chat-bubble-primary rounded-btn">
        Hey Mark!! Stop stealing my data!!
        <time className="flex flex-col items-end text-xs opacity-50">
          1 hour ago
        </time>
      </div>
      <div className="chat-footer opacity-50">Delivered</div>
    </div>
  );
};

export default EachChat;
