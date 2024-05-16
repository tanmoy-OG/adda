import SearchSvg from "@/icons/search-svg";

const Search = ({ setSearch }: any) => {
  return (
    <div className="mr-4">
      <label className="input input-accent bg-base-100 flex h-10 w-full items-center gap-2">
        <SearchSvg />
        <input
          className="w-full grow"
          placeholder="Search Contacts"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
    </div>
  );
};

export default Search;
