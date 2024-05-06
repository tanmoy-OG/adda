import { FC } from "react";

const Search: FC = () => {
  return (
    <label className="input min-h-10 w-full input-bordered flex items-center gap-2">
      <input type="text" className="grow w-full" placeholder="Search" />
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
        className="lucide lucide-search h-4"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    </label>
  );
};

export default Search;
