import React, { useEffect } from "react";

import { useSocketContext } from "@/context/socket-context";
import useConversation from "@/global/use-conversation-zustand";
import notificationSound from "@/sounds/notification-sound.mp3";

const useListenMessages = () => {
  const { socket }: any = useSocketContext();
  const { messages, setMessages }: any = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage: any) => {
      newMessage.shake = true;
      const audio = new Audio(notificationSound);
      audio.play();
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [messages, setMessages, socket]);
};

export default useListenMessages;
