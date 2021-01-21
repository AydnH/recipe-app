import React from "react";
import { connect } from "react-redux";
import { SearchForm } from "./forms/SearchForm";
import { fetchRecipes } from "./models/Search";

interface IAppProps {
	fetchRecipes: Function;
}
interface IAppState {
	fetching: boolean;
}

class _App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
	}

	render() {
		return (
			<div>
				<SearchForm fetchRecipes={fetchRecipes} />
			</div>
		);
	}
}

export const App = _App;
