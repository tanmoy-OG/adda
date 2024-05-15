import { FC } from "react";

import SearchSvg from "@/icons/search-svg";

const Search: FC = ({ setSearch }: any) => {
  return (
    <label className="input input-bordered flex  w-full items-center gap-2">
      <SearchSvg />
      <input
        className="w-full grow"
        placeholder="Search Contacts"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
    </label>
  );
};

export default Search;
