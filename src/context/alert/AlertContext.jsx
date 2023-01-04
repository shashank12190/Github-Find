import { createContext } from "react";
import { useReducer } from "react";
import alertReducer from "./AlertReducer";

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = null;

  // set an alert

  const setAlert = (msg, type) => {
    dispatch({ type: "SET_ALERT", payload: { msg, type } });

    setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000);
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);
  return (
    <AlertContext.Provider value={{ setAlert, alert: state }}>
      {children}
    </AlertContext.Provider>
  );
};
