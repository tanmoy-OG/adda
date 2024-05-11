"use client";
import { FC, FormEvent, useState } from "react";

import useSignup from "@/hooks/use-signup";
import NameSvg from "@/icons/name-svg";
import PasswordSvg from "@/icons/password-svg";
import UsernameSvg from "@/icons/username-svg";

const SignUp: FC = () => {
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
        <label className="input input-bordered flex items-center gap-2">
          <NameSvg />
          <input
            className="grow"
            placeholder="Display Name"
            type="text"
            value={inputs.name}
            onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <UsernameSvg />
          <input
            className="grow"
            placeholder="Username"
            type="text"
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <PasswordSvg />
          <input
            className="grow"
            placeholder="Password"
            type="password"
            value={inputs.pass}
            onChange={(e) => setInputs({ ...inputs, pass: e.target.value })}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
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
          className="select select-bordered w-full max-w-xs"
          value={inputs.gender}
          onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
        >
          <option selected>Male</option>
          <option>Female</option>
        </select>
        <div className="card-actions">
          <button className="btn btn-primary" disabled={loading} type="submit">
            {loading ? (
              <span className="loading loading-spinner text-primary"></span>
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
