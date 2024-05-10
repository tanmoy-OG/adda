import React from "react";

import Chat from "./chat";
import ChatInput from "./chat-input";
import ChatNav from "./chat-nav";

const ChatContainer = () => {
  return (
    <div className="flex size-full flex-col pb-4">
      <ChatNav />
      <Chat />
      <ChatInput />
    </div>
  );
};

export default ChatContainer;
