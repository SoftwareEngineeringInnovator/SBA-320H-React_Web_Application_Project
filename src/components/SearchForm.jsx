function SearchForm() {
  return (
    <section className="search-section">
      <h2>Search for Vulnerabilities</h2>

      <form>
        {/* The label explains what information the user should enter */}
        
        <label htmlFor="search-input">Enter a product, technology, or CVE identification number: </label>

        <input id="search-input" type="text" placeholder="Example: Windows or CVE-2021-44228"/>

        <button type="submit">Search</button>
      </form>
    </section>
  );
}

export default SearchForm;