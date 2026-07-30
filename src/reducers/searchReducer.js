// Store the initial state for the vulnerability searches
export const initialSearchState = {
  vulnerabilities: [],
  loading: false,
  error: "",
  totalResults: 0,
};

// Update the search state based on the action received
export function searchReducer(state, action) {
  switch (action.type) {
    case "SEARCH_STARTED":
      return {
        ...state,
        loading: true,
        error: "",
      };

    case "SEARCH_SUCCESS":
      return {
        ...state,
        vulnerabilities: action.payload.vulnerabilities,
        totalResults: action.payload.totalResults,
        loading: false,
        error: "",
      };

    case "SEARCH_ERROR":
      return {
        ...state,
        vulnerabilities: [],
        totalResults: 0,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}