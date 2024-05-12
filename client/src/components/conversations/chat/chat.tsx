import { FC, useEffect } from "react";

import EachChat from "./each-chat";

import useGetMessages from "@/hooks/use-get-messages";

const Chat: FC = () => {
  const { messages, loading } = useGetMessages();

  return (
    <div className="size-full overflow-auto p-4">
      {!loading &&
        messages.length > 0 &&
        messages.map((message: any) => (
          <EachChat key={message._id} message={message} />
        ))}

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
