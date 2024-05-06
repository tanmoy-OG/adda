import { FC } from "react";
import EachChat from "./each-chat";

const Chat: FC = () => {
  return (
    <div className="overflow-auto px-4">
      <EachChat />
      <EachChat />
      <EachChat />
      <EachChat />
      <EachChat />
      <EachChat />
      <EachChat />
      <EachChat />
      <EachChat />
      <EachChat />
    </div>
  );
};

export default Chat;
