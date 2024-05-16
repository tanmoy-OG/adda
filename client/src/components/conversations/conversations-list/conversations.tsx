import { useState } from "react";

import Conversation from "./conversation";
import MyProfileInfo from "./my-profile-info";
import Search from "./search";

import useGetConversations from "@/hooks/use-get-conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  const [search, setSearch] = useState("");

  return (
    <div className="bg-neutral flex h-full w-1/3 flex-col p-4 pr-0">
      <MyProfileInfo />
      <Search setSearch={setSearch} />
      <div className="flex h-full flex-col gap-4 overflow-y-auto pr-4 pt-4">
        {conversations
          .filter((conversation: any) => {
            return search.toLowerCase() === ""
              ? conversation
              : conversation.name.toLowerCase().includes(search) ||
                  conversation.username.toLowerCase().includes(search);
          })
          .map((conversation: any) => (
            <Conversation key={conversation._id} conversation={conversation} />
          ))}

        {loading ? (
          <span className="loading loading-spinner text-secondary m-auto"></span>
        ) : null}
      </div>
    </div>
  );
};

export default Conversations;
