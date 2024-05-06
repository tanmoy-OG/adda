import Image from "next/image";
import Sidebar from "@/common/sidebar";
import Conversations from "components/conversations/conversations-list/conversations";
import ChatContainer from "components/conversations/chat/chat-container";

export default function Home() {
  return (
    <main className="absolute top-16 bottom-0 flex bg-primary items-start gap-6 w-full justify-between px-6 pb-6">
      <Sidebar />
      <div className="size-full bg-base-100 rounded-box contain-content flex shadow-xl">
        <Conversations />
        <ChatContainer />
      </div>
    </main>
  );
}
