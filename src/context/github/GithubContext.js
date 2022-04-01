import { useContext, createContext, useReducer } from 'react';
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
  const searchUsers = async (text) => {
    try {
      setLoading();

      const token = process.env.REACT_APP_GITHUB_TOKEN;
      const githubURL = process.env.REACT_APP_GITHUB_URL;

      const params = new URLSearchParams({
        q: text,
      });
      const {
        data: { items },
      } = await axios.get(`${githubURL}/search/users?${params}`, {
        Authorization: `Bearer ${token}`,
      });
      dispatch({ type: Actions.GET_USERS, payload: { items } });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export const useGithubContext = () => useContext(GithubContext);
