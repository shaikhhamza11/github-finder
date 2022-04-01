export const GithubReducer = (state, action) => {
  switch (action.type) {
    case 'get-users':
      return { ...state, users: action.payload.items, loading: false };

    case 'set-loading':
      return { ...state, loading: true };

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
