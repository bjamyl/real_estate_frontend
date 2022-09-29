import { useState, createContext } from "react";
import { useRouter } from "next/router";


const SearchContext = createContext();

export default SearchContext;

export const SearchProvider = ({ children }) => {
  const [listingsSearch, setListingsSearch] = useState([]);
  const [searchItems, setSearchItems] = useState("");
  // Declaring state for handling listing page searches
  const [values, setValues] = useState({
    keyword: "",
    location: "",
    region: "",
    rooms: "",
    price: "",
  });
  const router = useRouter();

  // Searching for a listing based on location from the homepage
  const searchLocation = async (e) => {
    e.preventDefault();
    setValues({
      keyword: "",
      location: "",
      region: "",
      rooms: "",
      price: "",
    });
    let res = await fetch(
      `http://127.0.0.1:8000/api/listings/?search=${searchItems.replaceAll(
        " ",
        "+"
      )}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    const data = await res.json();
    if (res.status === 200) {
      if (data.length !== 0) {
        setListingsSearch(data);
      } else {
        setListingsSearch(null);
      }
      router.push("/search");
    } else {
      console.log("An error occured");
    }
  };

  // Searching and filtering listing
  const searchFilter = async (e) => {
    e.preventDefault();
    setSearchItems("");
    const res = await fetch(
      `http://127.0.0.1:8000/api/listings/?bedrooms=${
        values.rooms
      }&region=${values.region.replaceAll(" ", "+")}&price=${
        values.price
      }&search=${values.location.replaceAll(
        " ",
        "+"
      )}+${values.keyword.replaceAll(" ", "+")}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    const data = await res.json();
    if (res.status === 200) {
      if (data.length !== 0) {
        setListingsSearch(data);
      } else {
        setListingsSearch(null);
      }
      router.push("/search");
    } else {
      console.log("An error occured");
    }
  };

  let searchData = {
    // variables here
    listingsSearch,
    searchItems,
    values,
    // functions here
    searchLocation,
    setSearchItems,
    setValues,
    searchFilter,
  };
  return (
    <SearchContext.Provider value={searchData}>
      {children}
    </SearchContext.Provider>
  );
};
