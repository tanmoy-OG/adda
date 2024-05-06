import { FC } from "react";

const ChatInput: FC = () => {
  return (
    <form action="" className="form-control mt-auto px-4">
      <div className="w-full flex gap-4">
        <textarea
          className="textarea bg-neutral w-full text-sm resize-y "
          placeholder="Message"
        ></textarea>
        <button className="btn btn-primary size-10 min-h-0 p-2 self-end">
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
            className="lucide lucide-send"
          >
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
