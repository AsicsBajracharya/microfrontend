import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {createMemoryHistory, createBrowserHistory} from 'history'
const mount = (el, {onNavigate, defaultHistory}) => {
  const history = defaultHistory || createMemoryHistory()
  if(onNavigate){
    history.listen(onNavigate)
  }
  ReactDOM.render(
    <>
      <App history={history} />
    </>,
    el
  );

  return {
    onParentNavigate({pathname: nextPathname}){  
      const {pathname} = history.location
      console.log('marketing', pathname, nextPathname)
      if(pathname !== nextPathname){
        console.log('container just navigated', nextPathname)
        history.push(nextPathname)
      }
    }
  }
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot, {defaultHistory: createBrowserHistory()});
  }
}

export { mount };
