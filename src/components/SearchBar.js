"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?keyword=${encodeURIComponent(query)}`);
    }
  };
  return (
    <form onSubmit={handleSearch} className="ml-4 relative">
      <input
        type="text"
        placeholder="Tìm kiếm..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="py-1 px-3 rounded w-[500px] bg-white text-black placeholder-gray-500 focus:outline-none"
      />
      <button
        type="submit"
        className="absolute right-1 top-1 text-teal-700 cursor-pointer"
        aria-label="Tìm kiếm"
      >
        🔍
      </button>
    </form>
  );
}
