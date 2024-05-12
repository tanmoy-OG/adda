import { FC, useState } from "react";

import useSendMessage from "@/hooks/use-send-message";
import SendSvg from "@/icons/send-svg";

const ChatInput: FC = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="form-control mt-auto px-4" onSubmit={handleSubmit}>
      <div className="flex w-full gap-4">
        <textarea
          className="textarea bg-neutral w-full resize-y text-sm "
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className="btn btn-primary size-10 min-h-0 self-end p-2">
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <SendSvg />
          )}
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
