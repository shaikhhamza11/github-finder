import axios from 'axios';

const token = process.env.REACT_APP_GITHUB_TOKEN;
const githubURL = process.env.REACT_APP_GITHUB_URL;

const github = axios.create({
  baseURL: githubURL,
  headers: {
    Authorization: token,
  },
});

// get all users
export const searchUsers = async (text) => {
  try {
    const params = new URLSearchParams({
      q: text,
    });
    const {
      data: { items },
    } = await github.get(`/search/users?${params}`);

    return items;
  } catch (e) {
    console.log(e);
  }
};

// get single users
export const getUserAndRepos = async (login) => {
  try {
    const [user, repos] = await Promise.all([
      github.get(`/users/${login}`),
      github.get(`/users/${login}/repos`),
    ]);

    return { user: user.data, repos: repos.data };
  } catch (e) {
    window.location = '/notfound';
  }
};
