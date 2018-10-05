import { CHANGE_GITHUB_REPO } from '../constants';

export const changeGitHubRepo = (github) => {
  return {
    type: CHANGE_GITHUB_REPO,
    github
  };
}
