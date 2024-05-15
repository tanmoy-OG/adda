import { FC } from "react";

import useConversation from "@/global/use-conversation-zustand";

const ChatNav: FC = () => {
  const { selectedConversation }: any = useConversation();

  return (
    <div className="navbar z-10 flex justify-between pl-10 shadow hover:cursor-default">
      <div className="text-center text-xl font-semibold">
        {selectedConversation.name}
      </div>
      <details className="dropdown dropdown-end">
        <summary className="btn btn-ghost size-10 min-h-0 p-2">
          <svg
            className="lucide lucide-ellipsis-vertical"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="5" r="1" />
            <circle cx="12" cy="19" r="1" />
          </svg>
        </summary>
        <ul className="menu dropdown-content rounded-box bg-base-100 z-[1] w-52 p-2 shadow">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </details>
    </div>
  );
};

export default ChatNav;
