import { useState } from "react";



function SearchForm({ onSearch }) {

    // Store the text entered in the search input
    const [searchTerm, setSearchTerm] = useState("");

    // Handle the form when the user clicks the Search button
    function handleSubmit(event) {
        event.preventDefault();

        onSearch(searchTerm);

        // Test the output of the search field
        // console.log("Search submitted:", searchTerm);
    }

    return (
        <section className="search-section">
            <h2>Search for Vulnerabilities</h2>

            <form onSubmit={handleSubmit}>
                {/* The label explains what information the user should enter */}

                <label htmlFor="search-input">Enter a product, technology, or CVE identification number: </label>

                <input id="search-input" type="text" placeholder="Example: Windows or CVE-2021-44228"
                    value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />

                <button type="submit">Search</button>
            </form>

            {/* Temporarily display the entered text to test useState */}
            <p>You are searching for: {searchTerm}</p>
        </section>
    );
}

export default SearchForm;