import "./App.css";
import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);
  console.log(searchField);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/akoskohl/scripts/main/random_users_with_email"
    )
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monters Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        onSearchChange={onSearchChange}
        placeholder="search monsters (cmd+f)"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
