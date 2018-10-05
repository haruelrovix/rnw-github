const api = ({ owner, repo }) => ({
  URI: `https://api.github.com/repos/${owner}/${repo}/commits`
});

export default api;
