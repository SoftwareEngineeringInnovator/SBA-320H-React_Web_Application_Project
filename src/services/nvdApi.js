// Get the NVD API address from the Vite variable
const NVD_API_URL = import.meta.env.VITE_NVD_API_URL;

// Request information from the API
export async function fetchVulnerabilities(searchTerm) {
  const cleanedSearchTerm = searchTerm.trim();

  // Limit search showing only 10 results
  const searchParameters = new URLSearchParams({
    resultsPerPage: "10",
  });

  // Use reges to check a complete CVE identification number
  const isCveId = /^CVE-\d{4}-\d{4,}$/i.test(cleanedSearchTerm);

  if (isCveId) {
    searchParameters.set("cveIds", cleanedSearchTerm.toUpperCase());
  } else {
    searchParameters.set("keywordSearch", cleanedSearchTerm);
  }

  const response = await fetch(
    `${NVD_API_URL}?${searchParameters.toString()}`,
  );

  if (!response.ok) {
    throw new Error("Unable to retrieve vulnerability data");
  }

  return response.json();
}
