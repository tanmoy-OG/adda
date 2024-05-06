import { FC } from "react";

const ChatNav: FC = () => {
  return (
    <div className="navbar hover:cursor-default pl-10 flex justify-between shadow-lg">
      <div className="text-center font-semibold text-xl">Mark Suckerberg</div>
      <details className="dropdown dropdown-end">
        <summary className="btn btn-ghost size-10 min-h-0 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-ellipsis-vertical"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="5" r="1" />
            <circle cx="12" cy="19" r="1" />
          </svg>
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
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
