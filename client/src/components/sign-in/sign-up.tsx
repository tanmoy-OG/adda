import { FC } from "react";

const SignUp: FC = () => {
  return (
    <div className="card bg-neutral shadow-xl">
      <div className="card-body items-center text-center">
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-case-sensitive opacity-70"
          >
            <path d="m3 15 4-8 4 8" />
            <path d="M4 13h6" />
            <circle cx="18" cy="12" r="3" />
            <path d="M21 9v6" />
          </svg>
          <input type="text" className="grow" placeholder="Display Name" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-user opacity-70"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <input type="text" className="grow" placeholder="Username" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-key-round opacity-70"
          >
            <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
          </svg>
          <input type="password" className="grow" placeholder="Password" />
        </label>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Gender? Don't yell at me for asking!
          </option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <div className="card-actions">
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
