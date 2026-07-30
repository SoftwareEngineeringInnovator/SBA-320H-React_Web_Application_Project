import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import "./App.css";

function App() {

    // Receive the search term submitted by the SearchForm component.
  function handleSearch(searchTerm) {
    console.log("Search received by App:", searchTerm);
  }

  return (
    <main>
      {/* Display the Cybersecurity Application to search for vulnerabilities */}
      <Header />

      {/* Display the vulnerability search form */}
      <SearchForm onSearch={handleSearch} />
    </main>
  );
}

export default App;