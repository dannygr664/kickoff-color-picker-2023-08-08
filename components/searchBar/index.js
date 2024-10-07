import { useState } from "react";

import s from "./styles.module.css";

const SearchBar = ({ refreshPalettes }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <form
      className={s.searchBar}
      onSubmit={(event) => {
        event.preventDefault();
        refreshPalettes(searchQuery);
      }}
    >
      <input
        className={s.input}
        value={searchQuery}
        placeholder="Search..."
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <button className={s.button} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
