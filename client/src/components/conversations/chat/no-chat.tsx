import React from "react";

import EmptyMessageSvg from "@/icons/empty-message-svg";

const NoChat = () => {
  return (
    <div className="size-full flex flex-col justify-center">
      <EmptyMessageSvg />
      <h1 className="text-center text-3xl font-bold">No Chat Selected</h1>
    </div>
  );
};

export default NoChat;
