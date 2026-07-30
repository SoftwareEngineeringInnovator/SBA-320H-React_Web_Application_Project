import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import { useReducer } from "react";
import { initialSearchState, searchReducer, } from "./reducers/searchReducer";
import "./App.css";

function App() {
  // Manage the vulnerability search information with useReducer
  const [searchState, dispatch] = useReducer(searchReducer, initialSearchState,);

  // Receive the search term submitted by the SearchForm component
  function handleSearch(searchTerm) {
    console.log("Search received by App:", searchTerm);

    dispatch({ type: "SEARCH_STARTED" });
  }

  return (
    <main>
      {/* Display the Cybersecurity Application to search for vulnerabilities */}
      <Header />

      {/* Display the vulnerability search form */}
      <SearchForm onSearch={handleSearch} />

      {/* Temporarily confirm that the reducer received the action */}
      {searchState.loading && <p>Preparing vulnerability search...</p>}
    </main>
  );
}

export default App;