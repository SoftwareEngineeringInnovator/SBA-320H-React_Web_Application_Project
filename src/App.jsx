import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import { useReducer } from "react";
import { initialSearchState, searchReducer, } from "./reducers/searchReducer";
import { fetchVulnerabilities } from "./services/nvdApi";
import ResultsList from "./components/ResultsList";
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

      {/* Display a message while the API request is loading */}
      {searchState.loading && (
        <p className="status-message">Searching for vulnerabilities...</p>
        )}

      {/* Display an error message if the API request fails */}
      {searchState.error && (
        <p className="error-message">{searchState.error}</p>
        )}

      {/* Display a message when the completed search has no results */}
      {searchState.hasSearched && !searchState.loading && !searchState.error && searchState.totalResults === 0 && (
          <p className="no-results-message">
            No vulnerabilities were found. Please try another search.
          </p>
        )}

      {/* Display the vulnerabilities returned by the API */}
      <ResultsList
        vulnerabilities={searchState.vulnerabilities}
        totalResults={searchState.totalResults}
      />
    </main>
  );
}

export default App;