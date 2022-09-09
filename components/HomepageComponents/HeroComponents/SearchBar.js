import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
export default function SearchBar({placeholderText}) {
  return (
    <div>
      <div className="flex justify-between items-center border rounded-md xl:w-3/4">
        <div className="flex">
          <MdLocationOn color="#B0BAD5" size={24} />
          <input placeholder={placeholderText} type="text" className="ml-2 focus:outline-none" />
        </div>
        <button className="bg-[#150F0A] text-white flex items-center justify-center gap-2 px-4 py-2">
          <AiOutlineSearch size={20} /> Search
        </button>
      </div>
    </div>
  );
}
