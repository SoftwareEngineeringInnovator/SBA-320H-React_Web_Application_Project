function ResultsList({ vulnerabilities }) {
  // Do not display the results section when there are no vulnerabilities
  if (vulnerabilities.length === 0) {
    return null;
  }

  return (
    <section className="results-section">
      <h2>Search Results</h2>

      <div className="results-list">
        {vulnerabilities.map((vulnerability) => {
          const cve = vulnerability.cve;

          // Vulnerability description
          const description = cve.descriptions[0]?.value || "No description is available, please verify your search";

          return (
            <article className="vulnerability-card" key={cve.id}>
              <h3>{cve.id}</h3>
              <p>{description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ResultsList;