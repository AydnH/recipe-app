import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { reducers } from "./reducers";

import { App } from "./components/App";
import { fetchRecipes } from "./components/models/Search";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<App fetchRecipes={fetchRecipes} />
	</Provider>,
	document.querySelector("#root")
);

export {};
