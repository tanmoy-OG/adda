import React from "react";
import ChatNav from "./chat-nav";
import Chat from "./chat";
import ChatInput from "./chat-input";

const ChatContainer = () => {
  return (
    <div className="size-full flex flex-col pb-4">
      <ChatNav />
      <Chat />
      <ChatInput />
    </div>
  );
};

export default ChatContainer;
