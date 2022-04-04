import { useContext, createContext, useReducer } from 'react';
import AlertReducer from './AlertReducer';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = null;
  const [state, dispatch] = useReducer(AlertReducer, initialState);
  const setAlert = (msg, type, time = 1000) => {
    dispatch({ type: 'set-alert', payload: { msg, type } });
    removeAlert(time);
  };
  const removeAlert = (time = 1000) => {
    setTimeout(() => {
      dispatch({ type: 'remove-alert' });
    }, time);
  };
  return (
    <AlertContext.Provider
      value={{ alert: state, setAlert, removeAlert, dispatch }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
