import Image from "next/image";

import { useAuthContext } from "@/context/auth-context";

const MyProfileInfo = () => {
  const { authUser }: any = useAuthContext();

  return (
    <div className="mb-4 mr-4 flex">
      <div className="avatar mx-4 my-auto mt-2 size-12">
        <div className="rounded-full">
          <Image
            alt="avatar"
            height={48}
            src={authUser.profilePic}
            width={48}
          />
        </div>
      </div>
      <div className="my-auto flex flex-col pr-4">
        <h2 className="font-medium">{authUser.name}</h2>
        <p className="text-secondary text-xs">@{authUser.username}</p>
      </div>
    </div>
  );
};

export default MyProfileInfo;
