import { useState } from "react";
import classes from "../styles/searchbar.module.css";
import utils from "../styles/utilities.module.css";

export default function SearchBar({ setCity }) {
  const [searchCity, setSerachCity] = useState("");

  const handleSearchCity = (e) => {
    if (e.keyCode === 13) {
      if (searchCity !== "") {
        setCity({ q: searchCity });
        setSerachCity("");
      }
    }
  };

  return (
    <div className={`${utils.flexbox} ${classes.searchBox}`}>
      <input
        type="text"
        placeholder="Search for cities"
        value={searchCity}
        onChange={(e) => setSerachCity(e.currentTarget.value)}
        onKeyDown={handleSearchCity}
      />
    </div>
  );
}
