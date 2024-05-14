import Image from "next/image";
import { FC } from "react";

import { useSocketContext } from "@/context/socket-context";
import useConversation from "@/global/use-conversation-zustand";

const Conversation: FC = ({ conversation }: any) => {
  const { selectedConversation, setSelectedConversation }: any =
    useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers }: any = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <div
      className={`card card-side rounded-btn w-full hover:cursor-pointer ${isSelected ? "bg-primary" : "bg-base-100"}`}
      onClick={() => setSelectedConversation(conversation)}
    >
      <figure className="h-20">
        <div
          className={`avatar m-4 size-12 ${isOnline ? "online" : "offline"}`}
        >
          <div className="rounded-full">
            <Image
              alt="avatar"
              height={48}
              src={conversation.profilePic}
              width={48}
            />
          </div>
        </div>
      </figure>
      <div className="card-body h-20 gap-0 p-4 pl-0">
        <h2 className="card-title text-sm">{conversation.name}</h2>
        <p className="text-xs">@{conversation.username}</p>
        <p className="text-xs"></p>
      </div>
    </div>
  );
};

export default Conversation;
