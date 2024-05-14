import React, { useEffect } from "react";

import { useSocketContext } from "@/context/socket-context";
import useConversation from "@/global/use-conversation-zustand";

const useListenMessages = () => {
  const { socket }: any = useSocketContext();
  const { messages, setMessages }: any = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage: any) => {
      newMessage.shake = true;
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [messages, setMessages, socket]);
};

export default useListenMessages;
