import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
export default function SearchBar({ placeholderText }) {
  const handleSubmit = async () => {
    const res = await fetch();
  };
  return (
    <div>
      <form className="border  xl:w-3/4 flex justify-between" onSubmit={handleSubmit}>
        <div className="flex w-full items-center pl-2">
          <MdLocationOn color="#B0BAD5" />
          <input className="p-2 w-full" placeholder={placeholderText} />
        </div>
        <button className="bg-[#150F0A] text-white px-3 flex items-center gap-2">
          {" "}
          <AiOutlineSearch /> Search
        </button>
      </form>
    </div>
  );
}

{
  /* <div className="">
<div className="flex justify-between items-center border rounded-md xl:w-3/4">
  <div className="flex items-center justify-center flex-row pl-2 focus:outline-2">
    <MdLocationOn size={24} />
    <input placeholder={placeholderText} type="text" className="focus:outline-none  " />
  </div>
  <button className="bg-[#150F0A] text-white flex items-center justify-center px-4 py-2">
    <AiOutlineSearch size={20} /> Search
  </button>
</div>
</div> */
}
