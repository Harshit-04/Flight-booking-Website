import { createContext, useReducer } from "react";

// Initial state for the search context
const INITIAL_STATE = {
  date: [],
  options: {
    adult: undefined,
    children: undefined,
  },
};

// Create a search context using createContext and provide the initial state as the default value
export const SearchContext = createContext(INITIAL_STATE);

// Reducer function for the search context
const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      // Update the state with the payload received in the action
      return action.payload;
    case "RESET_SEARCH":
      // Reset the state to the initial state
      return INITIAL_STATE;
    default:
      return state;
  }
};

// Search context provider component
export const SearchContextProvider = ({ children }) => {
  // Use the useReducer hook to manage the state with the search reducer
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  return (
    // Provide the state values and dispatch function as the value of the search context
    <SearchContext.Provider
      value={{
        date: state.date,
        options: state.options,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
