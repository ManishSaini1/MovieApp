import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore,applyMiddleware } from 'redux';
import rootReducer from './reducers'
import thunk from 'redux-thunk';
// import movies from './reducers';
// const logger= function({dispatch, getState})
// {
//   return function(next) {
//     return function(action) {
//       console.log("Action........................................", action);
//       next(action);
//     }
//   }
// }
//New Way to write Middleware
const logger= ({dispatch, getState})=>(next)=>(action)=>{
  if(typeof action !='function')
  {
  console.log("Action........................................", action);

  }
  next(action);
}
// const thunk= ({dispatch, getState})=>(next)=>(action)=>{
//   // console.log("Action........................................", action);
//   // next(action);
//   console.log(" I Am in thunk");
//   if(typeof action === 'function')
//   {
//     action(dispatch);
//     return;
//   }
//   next(action);
// }
const store= createStore(rootReducer,applyMiddleware(logger,thunk));
console.log('Store', store.getState());
 
ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

 