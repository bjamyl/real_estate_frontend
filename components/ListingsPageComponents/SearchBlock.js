import {useContext} from "react";
import { AiOutlineSearch } from "react-icons/ai";
import SearchContext from "../../context/SearchContext";
import { regions, bedrooms, max_price } from "./data";

export default function SearchBlock({ description }) {
  let { values, setValues, searchFilter,listingsSearch } = useContext(SearchContext);

  console.log(values);
  console.log(listingsSearch)

  return (
    <section className="mx-4 mb-10 xl:flex xl:justify-center">
      <div className="xl:w-[1280px] text-center">
        <h1 className="font-bold text-3xl xl:text-6xl">Search for an offer</h1>
        <p className="text-lg xl:text-2xl xl:my-3">{description}</p>
        <div className="mt-4">
          <form onSubmit={searchFilter} action="">
            <div className="flex-col space-y-2">
              <div className="">
                <input
                  className="p-2 border w-3/4 xl:w-1/4 focus:outline-none"
                  placeholder="Enter a keyword (Pool, Garage, etc)"
                  type="text"
                  value={values.keyword}
                  onChange={(e)=> setValues({...values, keyword: e.target.value})}
                />
              </div>
              <div className="xl:px-2 xl:gap-4 xl:flex xl:space-y-0 xl:justify-between space-y-2">
                {/* City */}
                <div className="xl:w-1/4">
                  <input
                    type="text"
                    placeholder="Location"
                    className="p-2 xl:w-full focus:outline-none w-3/4 border"
                    value={values.location}
                    onChange={(e)=> setValues({...values, location:e.target.value})}
                  />
                </div>
                {/* Region */}
                <div className="xl:w-1/4 ">
                  <select
                    value={values.region}
                    onChange={(e) =>
                      setValues({ ...values, region: e.target.value })
                    }
                    className="border xl:w-full  w-3/4 p-2"
                    name=""
                    id=""
                  >
                    <option
                      className="font-bold text-lg"
                      disabled
                      value=""
                    >
                      Region
                    </option>
                    {regions.map((region) => (
                      <option key={region.id} value={region.name}>
                        {region.name}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Bedrooms */}
                <div className="xl:w-1/4 ">
                  <select
                    value={values.rooms}
                    onChange={(e) =>
                      setValues({ ...values, rooms: e.target.value })
                    }
                    className="border xl:w-full  w-3/4 p-2"
                    name=""
                    id=""
                  >
                    <option className="font-bold text-lg" disabled value="">
                      Bedrooms
                    </option>
                    {bedrooms.map((bedroom) => (
                      <option key={bedroom.id} value={bedroom.number}>
                        {bedroom.number}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Max price */}
                <div className="xl:w-1/4 ">
                  <select
                    value={values.price}
                    onChange={(e) =>
                      setValues({ ...values, price: e.target.value })
                    }
                    className="border xl:w-full w-3/4  p-2"
                    name=""
                    id=""
                  >
                    <option className="font-bold text-lg" disabled value="">
                      Max Price
                    </option>
                    {max_price.map((price) => (
                      <option key={price.id} value={price.price}>
                        GHC{price.price}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#150F0A] text-white flex xl:text-xl xl:px-6 xl:py-3 xl:gap-3 items-center justify-center gap-2 px-4 py-2"
                >
                  <AiOutlineSearch size={25} /> Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
