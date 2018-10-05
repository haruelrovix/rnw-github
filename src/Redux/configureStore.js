import { createStore } from 'redux'
import rootReducer from '../Reducers'

const configureStore = () => {
  let store = createStore(rootReducer);
  return store;
}

export default configureStore;
