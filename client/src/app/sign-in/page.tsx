import { FC } from "react";
import LogIn from "components/sign-in/log-in";
import SignUp from "components/sign-in/sign-up";

const SignIn: FC = () => {
  return (
    <div className="flex absolute w-full top-1/4 flex-col justify-center">
      <div role="tablist" className="tabs tabs-lifted mx-auto">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab [--tab-bg:#EBEBEB] [--tab-border:0px] [--tab-corner-bg:#EBEBEB]"
          aria-label="Log In"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content rounded-box bg-neutral">
          <LogIn />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab [--tab-bg:#EBEBEB] [--tab-border:0px] [--tab-corner-bg:#EBEBEB]"
          aria-label="Sign Up"
        />
        <div role="tabpanel" className="tab-content bg-neutral rounded-box">
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
