import { useAuthContext } from "@/context/auth-context";
import useConversation from "@/global/use-conversation-zustand";

const EachChat = ({ message }: any) => {
  const { authUser }: any = useAuthContext();
  const { selectedConversation }: any = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatPos = fromMe ? "chat-end" : "chat-start";
  const bubbleBgColor = fromMe ? "chat-bubble-primary" : "";

  return (
    <div className={`chat  ${chatPos}`}>
      <div className="chat-header"></div>
      <div className={`chat-bubble rounded-btn ${bubbleBgColor}`}>
        {message.message}
        <time className="flex flex-col items-end text-xs opacity-50">
          {message.createdAt}
        </time>
      </div>
      <div className="chat-footer opacity-50">Delivered</div>
    </div>
  );
};

export default EachChat;
