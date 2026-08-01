function ResultsList({ vulnerabilities, totalResults }) {
    // Do not display the results section when there are no vulnerabilities
    if (vulnerabilities.length === 0) {
        return null;
    }

    return (
        <section className="results-section">
            <h2>Search Results</h2>
            {/* DIsplay the amount of result found for every item */}
            <p className="results-total">
                Total vulnerabilities found: {totalResults}
            </p>

            <div className="results-list">
                {vulnerabilities.map((vulnerability) => {
                    const cve = vulnerability.cve;

                    // Vulnerability description
                    const description = cve.descriptions[0]?.value || "No description is available, please verify your search";

                    // Format the published date so it is easier to read.
                    const publishedDate = cve.published ? new Date(cve.published).toLocaleDateString() : "Not available";

                    return (

                        // Identify the vulnerabilities under the search item
                        <article className="vulnerability-card" key={cve.id}>

                            {/* Display published vulnerabilities date */}
                            <p>
                                <strong>Published:</strong> {publishedDate}
                            </p>

                            {/* Display the vulnerabilities number */}
                            <h3>{cve.id}</h3>
                            {/* Display the description of the vulnerabilities */}
                            <p>{description}</p>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

export default ResultsList;