import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");
  // const termRef = useRef();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };
  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter the search term: </label>
        <input value={term} onChange={handleTermChange} />
      </form>
    </div>
  );
};
export default SearchBar;
