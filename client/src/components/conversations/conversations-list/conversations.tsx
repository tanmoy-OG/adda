import { FC } from "react";

import AddFriendBtn from "./add-friend-btn";
import Conversation from "./conversation";
import Search from "./search";

const Conversations: FC = () => {
  return (
    <div className="bg-neutral flex h-full w-1/3 flex-col gap-4 overflow-y-auto p-4">
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
