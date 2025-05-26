import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
export default function Header() {
  return (
    <header className="bg-[#1a99d8] text-white sticky top-0 z-50">
      <div className="container mx-auto p-2 flex justify-center ">
        <SearchBar />
      </div>
      <Navbar />
    </header>
  );
}
