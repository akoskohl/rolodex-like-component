import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
        className="monsters-search-box"
        onSearchChange={onSearchChange} 
        placeholder="search monsters (cmd+f)"
        />
        <CardList 
        monsters={filteredMonsters}
        />
      </div>
    );
  }
}

export default App;