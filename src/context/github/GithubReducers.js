export const GithubReducer = (state, action) => {
  switch (action.type) {
    case 'get-users':
      return { ...state, users: action.payload.users, loading: false };

    case 'get-user-and-repos':
      return {
        ...state,
        repos: action.payload.repos,
        user: action.payload.user,
        loading: false,
      };
    case 'set-loading':
      return { ...state, loading: true };

    case 'remove-loading':
      return { ...state, loading: false };
    case 'clear-users':
      return {
        ...state,
        loading: false,
        users: [],
      };
    default:
      return state;
  }
};
