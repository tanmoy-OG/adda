import { FC } from "react";

const Conversation: FC = () => {
  return (
    <div className="card card-side rounded-btn bg-base-100 w-full">
      <figure className="h-20">
        <div className="avatar online m-4 size-12">
          <div className="rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </figure>
      <div className="card-body h-20 p-4 pl-0">
        <h2 className="card-title text-sm">Tanmoy_OG</h2>
        <p></p>
      </div>
    </div>
  );
};

export default Conversation;
