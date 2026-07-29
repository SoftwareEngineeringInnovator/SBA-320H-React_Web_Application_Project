import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import "./App.css";

function App() {
  return (
    <main>
      {/* Display the Cybersecurity Application to search for vulnerabilities */}
      <Header />

      {/* Display the vulnerability search form */}
      <SearchForm />
    </main>
  );
}

export default App;