"use client";
import { useRouter } from "next/navigation";
import { FC } from "react";

import { useAuthContext } from "@/context/auth-context";
import LogIn from "@/sign-in/log-in";
import SignUp from "@/sign-in/sign-up";

const SignIn: FC = () => {
  const { authUser } = useAuthContext();
  const router = useRouter();

  if (authUser) {
    router.push("/");
    return null;
  }

  return (
    <div className="absolute top-1/4 flex w-full flex-col justify-center">
      <div className="tabs tabs-lifted mx-auto" role="tablist">
        <input
          defaultChecked
          aria-label="Log In"
          className="tab [--tab-bg:#EBEBEB] [--tab-border:0px] [--tab-corner-bg:#EBEBEB]"
          name="my_tabs_2"
          role="tab"
          type="radio"
        />
        <div className="tab-content rounded-box bg-neutral" role="tabpanel">
          <LogIn />
        </div>

        <input
          aria-label="Sign Up"
          className="tab [--tab-bg:#EBEBEB] [--tab-border:0px] [--tab-corner-bg:#EBEBEB]"
          name="my_tabs_2"
          role="tab"
          type="radio"
        />
        <div className="tab-content rounded-box bg-neutral" role="tabpanel">
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
