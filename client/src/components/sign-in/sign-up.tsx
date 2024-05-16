"use client";
import { FormEvent, useState } from "react";

import useSignup from "@/hooks/use-signup";
import NameSvg from "@/icons/name-svg";
import PasswordSvg from "@/icons/password-svg";
import UsernameSvg from "@/icons/username-svg";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    name: "",
    username: "",
    pass: "",
    confPass: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(inputs);
    await signup(inputs);
  };

  return (
    <div className="card bg-neutral shadow-xl">
      <form
        className="card-body items-center text-center"
        onSubmit={handleSubmit}
      >
        <label className="input input-bordered input-primary flex items-center gap-2">
          <NameSvg />
          <input
            className="grow"
            placeholder="Display Name"
            type="text"
            value={inputs.name}
            onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
          />
        </label>
        <label className="input input-bordered input-primary flex items-center gap-2">
          <UsernameSvg />
          <input
            className="grow"
            placeholder="Username"
            type="text"
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
          />
        </label>
        <label className="input input-bordered input-primary flex items-center gap-2">
          <PasswordSvg />
          <input
            className="grow"
            placeholder="Password"
            type="password"
            value={inputs.pass}
            onChange={(e) => setInputs({ ...inputs, pass: e.target.value })}
          />
        </label>
        <label className="input input-bordered input-primary flex items-center gap-2">
          <PasswordSvg />
          <input
            className="grow"
            placeholder="Confirm Password"
            type="password"
            value={inputs.confPass}
            onChange={(e) => setInputs({ ...inputs, confPass: e.target.value })}
          />
        </label>
        <select
          className="select select-bordered select-primary mb-4 w-full max-w-xs"
          value={inputs.gender}
          onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
        >
          <option selected>Male</option>
          <option>Female</option>
        </select>
        <div className="card-actions w-full">
          <button
            className="btn btn-primary text-base-100 mx-auto w-1/3"
            disabled={loading}
            type="submit"
          >
            {loading ? (
              <span className="loading loading-spinner text-info "></span>
            ) : (
              "Sign Up"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
