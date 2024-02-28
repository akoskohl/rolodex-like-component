import "./search-box.styles.css";

const SearchBox = ({ id, className, placeholder, onSearchChange }) => (
  <input
    id={id}
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onSearchChange}
  />
);

export default SearchBox;
