import axios from "axios";
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_KEY;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

// search users
export const searchUsers = async (text) => {
  const params = new URLSearchParams({ q: text });
  const response = await github.get(`/search/users?${params}`);
  return response.data.items;
};

// get user and all his repos repos
export const getUserAndRepos = async (id) => {
  const params = new URLSearchParams({ sort: "created", per_page: 10 });
  const [user, repos] = await Promise.all([
    github.get(`/users/${id}`),
    github.get(`/users/${id}/repos?${params}`),
  ]);
  return {
    user: user.data,
    repos: repos.data,
  };
};
