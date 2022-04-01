import { useContext, createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import { GithubReducer } from './GithubReducers';
import { Actions } from '../../constants/Actions';
const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);
  const setLoading = () => {
    dispatch({ type: Actions.SET_LOADING });
  };
  const fetchUsers = async () => {
    try {
      setLoading();

      const token = process.env.REACT_APP_GITHUB_TOKEN;
      const githubURL = process.env.REACT_APP_GITHUB_URL;

      const { data } = await axios.get(`${githubURL}/users`, {
        Authorization: `Bearer ${token}`,
      });
      dispatch({ type: Actions.GET_USERS, payload: { data } });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <GithubContext.Provider
      value={{ users: state.users, loading: state.loading, fetchUsers }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export const useGithubContext = () => useContext(GithubContext);
