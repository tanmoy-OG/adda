"use client";

import { useRouter } from "next/navigation";

import ChatContainer from "@/chat/chat-container";
import Sidebar from "@/common/sidebar";
import { useAuthContext } from "@/context/auth-context";
import Conversations from "@/conversations-list/conversations";

const Home = () => {
  const { authUser }: any = useAuthContext();
  const router = useRouter();
  if (!authUser) {
    router.push("/sign-in");
    return null;
  }
  return (
    <main className="bg-primary absolute bottom-0 top-16 flex w-full items-start justify-between gap-6 px-6 pb-6">
      <Sidebar />
      <div className="rounded-box bg-base-100 flex size-full shadow-xl contain-content">
        <Conversations />
        <ChatContainer />
      </div>
    </main>
  );
};

export default Home;
