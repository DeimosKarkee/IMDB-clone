"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  };

  return (
    <form
      onSubmit={handelSubmit}
      className="flex max-width-6xl mx-auto justify-between items-center px-5"
    >
      <input
        type="text"
        placeholder="Seach movie name....."
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button
        disabled={!search}
        type="submit"
        className="text-amber-600 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
