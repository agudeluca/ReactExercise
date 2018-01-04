import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers/index.js';
import devTools from 'remote-redux-devtools';
import thunk from 'redux-thunk'
export default function configureStore() {
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools({
      name: 'ExampleAgustinDeluca', realtime: true,
    }),
  );
  let store = createStore(reducer, enhancer)
  return store

}
