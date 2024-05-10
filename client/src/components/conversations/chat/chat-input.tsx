import { FC } from "react";

const ChatInput: FC = () => {
  return (
    <form action="" className="form-control mt-auto px-4">
      <div className="flex w-full gap-4">
        <textarea
          className="textarea bg-neutral w-full resize-y text-sm "
          placeholder="Message"
        ></textarea>
        <button className="btn btn-primary size-10 min-h-0 self-end p-2">
          <svg
            className="lucide lucide-send"
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
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
