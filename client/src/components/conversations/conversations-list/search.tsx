import { FC } from "react";

const Search: FC = () => {
  return (
    <label className="input input-bordered flex min-h-10 w-full items-center gap-2">
      <input className="w-full grow" placeholder="Search" type="text" />
      <svg
        className="lucide lucide-search h-4"
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
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    </label>
  );
};

export default Search;
