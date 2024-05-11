import { FC } from "react";

import AddFriendBtn from "./add-friend-btn";
import Conversation from "./conversation";
import Search from "./search";

import useGetConversations from "@/hooks/use-get-conversation";

const Conversations: FC = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="bg-neutral flex h-full w-1/3 flex-col gap-4 overflow-y-auto p-4">
      <Search />
      <AddFriendBtn />
      {conversations.map((conversation: any) => (
        <Conversation key={conversation._id} conversation={conversation} />
      ))}
      
      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  );
};

export default Conversations;
