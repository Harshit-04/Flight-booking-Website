import { createContext, useEffect, useReducer } from "react";
import axios from "axios";

const userData = localStorage.getItem("user");
console.log(userData, "5465465465")
let user1 = null;
try {
  // Parse the JSON data if it exists
  if (userData) {
    user1 = JSON.parse(userData);
      
  }
} catch (error) {
  console.error("Error parsing user data:", error);
  console.log(user1)
}

// Use the parsed user data or null if parsing failed
user1 = user1 || null;
const INITIAL_STATE = {
  user: user1,
  loading: false,
  error: null,
};

// Save user data to the server database
const saveUserToServer = async (userData) => {
  try {
    await axios.post("/users", userData);
    console.log("User data saved to the server");
  } catch (error) {
    console.error("Error saving user data to the server:", error);
    // Handle the error
  }
};

// Retrieve user data from the server
const retrieveUserFromServer = async () => {
  try {
    const response = await axios.get("/users");
    const user = response.data;
    console.log("User data retrieved from the server:", user);
    // Handle the retrieved user data
  } catch (error) {
    console.error("Error retrieving user data from the server:", error);
    // Handle the error
  }
};

// Call the functions to save and retrieve user data
saveUserToServer(userData);

retrieveUserFromServer();


export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};