import { CHANGE_GITHUB_REPO } from '../constants';

const initialState = {
  owner: 'facebook',
  repo: 'react'
};

const githubReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_GITHUB_REPO:
      return { ...action.github };
    default:
      return state;
  }
}

export default githubReducer;
