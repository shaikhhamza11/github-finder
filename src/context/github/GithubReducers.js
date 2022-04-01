export const GithubReducer = (state, action) => {
  switch (action.type) {
    case 'get-users':
      return { ...state, users: action.payload.data, loading: false };

    case 'set-loading':
      return { ...state, loading: true };

    default:
      return state;
  }
};
