import React from "react";
import SearchBar from "../HomepageComponents/HeroComponents/SearchBar";

const options = [
  { id: 1, choice: "Upper West" },
  {
    id: 2,
    choice: "Upper East",
  },
  {
    id: 3,
    choice: "Northern",
  },
];

export default function SearchBlock() {
  return (
    <section className="mx-4">
      <div>
        <h1 className="font-bold text-3xl">
          Search for a properties
        </h1>
        <SearchBar placeholderText="Enter a Keyword" />
        <div>
          <div>
            <select>
              <option selected="true" disabled>
                Region
              </option>
              {options.map((option) => (
                <option key={option.id}>{option.choice}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
