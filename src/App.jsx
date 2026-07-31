import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import { useReducer } from "react";
import { initialSearchState, searchReducer, } from "./reducers/searchReducer";
import { fetchVulnerabilities } from "./services/nvdApi";
import "./App.css";

function App() {
  // Manage the vulnerability search information with useReducer
  const [searchState, dispatch] = useReducer(searchReducer, initialSearchState,);

  // Receive the search term submitted by the SearchForm component
  async function handleSearch(searchTerm) {
    dispatch({ type: "SEARCH_STARTED" });

    try {
      const data = await fetchVulnerabilities(searchTerm);

      console.log("NVD API response:", data);

      dispatch({
        type: "SEARCH_SUCCESS",
        payload: {
          vulnerabilities: data.vulnerabilities,
          totalResults: data.totalResults,
        },
      });
    } catch (error) {
      dispatch({
        type: "SEARCH_ERROR",
        payload: error.message,
      });
    }
  }

  return (
    <main>
      {/* Display the Cybersecurity Application to search for vulnerabilities */}
      <Header />

      {/* Display the vulnerability search form */}
      <SearchForm onSearch={handleSearch} />

      {/* Display the serach functionality from the user input */}
      {searchState.loading && <p>Searching for vulnerabilities...</p>}

      {searchState.error && <p>{searchState.error}</p>}

      {!searchState.loading && !searchState.error && searchState.totalResults > 0 && (
          <p>Total vulnerabilities found: {searchState.totalResults}</p>
        )}
    </main>
  );
}

export default App;