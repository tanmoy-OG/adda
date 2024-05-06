import { FC } from "react";
import Search from "./search";
import AddFriendBtn from "./add-friend-btn";
import Conversation from "./conversation";

const Conversations: FC = () => {
  return (
    <div className="h-full w-1/3 bg-neutral overflow-y-auto p-4 flex flex-col gap-4">
      <Search />
      <AddFriendBtn />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  );
};

export default Conversations;
