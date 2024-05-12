import MessageSkeleton from "components/skeletons/message-skeleton";
import { FC, useEffect, useRef } from "react";

import EachChat from "./each-chat";

import useGetMessages from "@/hooks/use-get-messages";

const Chat: FC = () => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef<any>();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="size-full overflow-auto p-4">
      {!loading &&
        messages.length > 0 &&
        messages.map((message: any) => (
          <div key={message._id} ref={lastMessageRef}>
            <EachChat message={message} />
          </div>
        ))}

      {loading && [...Array(2)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <div className="flex size-full flex-col justify-center">
          <p className="text-center">
            Send a message to start{" "}
            <span className="text-primary font-semibold">Addaa!!</span> ☕
          </p>
        </div>
      )}
    </div>
  );
};

export default Chat;
