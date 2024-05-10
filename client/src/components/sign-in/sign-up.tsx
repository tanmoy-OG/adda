"use client";
import { FC, FormEvent, useState } from "react";

import useSignup from "@/hooks/useSignup";

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
          <svg
            className="lucide lucide-case-sensitive opacity-70"
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
            <path d="m3 15 4-8 4 8" />
            <path d="M4 13h6" />
            <circle cx="18" cy="12" r="3" />
            <path d="M21 9v6" />
          </svg>
          <input
            required
            className="grow"
            placeholder="Display Name"
            type="text"
            value={inputs.name}
            onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            className="lucide lucide-user opacity-70"
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
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <input
            required
            className="grow"
            placeholder="Username"
            type="text"
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            className="lucide lucide-key-round opacity-70"
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
            <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
            <circle cx="16.5" cy="7.5" fill="currentColor" r=".5" />
          </svg>
          <input
            required
            className="grow"
            placeholder="Password"
            type="password"
            value={inputs.pass}
            onChange={(e) => setInputs({ ...inputs, pass: e.target.value })}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            className="lucide lucide-key-round opacity-70"
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
            <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
            <circle cx="16.5" cy="7.5" fill="currentColor" r=".5" />
          </svg>
          <input
            required
            className="grow"
            placeholder="Confirm Password"
            type="password"
            value={inputs.confPass}
            onChange={(e) => setInputs({ ...inputs, confPass: e.target.value })}
          />
        </label>
        <select
          required
          className="select select-bordered w-full max-w-xs"
          value={inputs.gender}
          onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
        >
          <option selected>Male</option>
          <option>Female</option>
        </select>
        <div className="card-actions">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
