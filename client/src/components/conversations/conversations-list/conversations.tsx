import Image from "next/image";
import { FC, useState } from "react";

import AddFriendBtn from "./add-friend-btn";
import Conversation from "./conversation";
import Search from "./search";

import { useAuthContext } from "@/context/auth-context";
import useGetConversations from "@/hooks/use-get-conversation";

const Conversations: FC = () => {
  const { loading, conversations } = useGetConversations();
  const { authUser }: any = useAuthContext();
  const [search, setSearch] = useState("");

  return (
    <div className="bg-neutral flex h-full w-1/3 flex-col gap-4 p-4 pr-0">
      <div className="mr-4 flex">
        <div className="avatar mx-4 my-auto mt-2 size-12">
          <div className="rounded-full border-2 border-black">
            <Image
              alt="avatar"
              height={48}
              src={authUser.profilePic}
              width={48}
            />
          </div>
        </div>
        <div className="my-auto flex flex-col pr-4">
          <h2 className="text-lg">{authUser.name}</h2>
          <p className="text-xs">@{authUser.username}</p>
        </div>
      </div>
      <div className="mr-4">
        <Search setSearch={setSearch} />
        <AddFriendBtn />
      </div>
      <div className="flex h-full flex-col gap-4 overflow-y-auto pr-4">
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
          <span className="loading loading-spinner mx-auto"></span>
        ) : null}
      </div>
    </div>
  );
};

export default Conversations;
