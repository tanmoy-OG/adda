import { FC } from "react";

import Settings from "./settings";

import BroadcastSvg from "@/icons/broadcast-svg";
import MessageSvg from "@/icons/message-svg";
import VideoCallSvg from "@/icons/video-call-svg";
import VoiceCallSvg from "@/icons/voice-call-svg";

const Sidebar: FC = () => {
  return (
    <div className="flex h-full flex-col gap-4 pt-4">
      <div className="flex flex-col gap-4">
        <button className="btn size-10 min-h-0 self-end bg-white p-2">
          <MessageSvg />
        </button>
        <button className="btn size-10 min-h-0 self-end bg-white p-2">
          <BroadcastSvg />
        </button>
        {/* <div className="divider"></div> */}
      </div>
      <div className="mt-auto flex flex-col gap-4">
        <button className="btn size-10 min-h-0 self-end bg-white p-2">
          <VideoCallSvg />
        </button>
        <button className="btn size-10 min-h-0 self-end bg-white p-2">
          <VoiceCallSvg />
        </button>
        <Settings />
      </div>
    </div>
  );
};

export default Sidebar;
