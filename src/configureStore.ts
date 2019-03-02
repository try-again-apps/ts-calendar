import { applyMiddleware, compose, createStore, Store } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import rootReducer from './reducer';
import { IApplicationState } from './types';

const DEVELOPMENT = true;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composedEnhancers = DEVELOPMENT
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  : compose;

const configureStore = (): Store<IApplicationState> => {
  const store: Store<IApplicationState> = createStore(
    rootReducer,
    // initialState,
    composedEnhancers(
      applyMiddleware(thunk as ThunkMiddleware<IApplicationState>)
    )
  );

  return store;
}

export default configureStore;