import React from "react";

import { useAuthContext } from "@/context/auth-context";
import EmptyMessageSvg from "@/icons/empty-message-svg";

const NoChat = () => {
  const { authUser }: any = useAuthContext();

  return (
    <div className="flex size-full flex-col justify-center gap-6">
      <EmptyMessageSvg />
      <div className="">
        <h1 className="text-center text-3xl font-medium">
          Yo {authUser.name} 👋🏽
        </h1>
        <h1 className="text-center text-3xl font-medium">
          Select a chat to start{" "}
          <span className="text-primary font-semibold">Addaa!!</span>
        </h1>
      </div>
    </div>
  );
};

export default NoChat;
