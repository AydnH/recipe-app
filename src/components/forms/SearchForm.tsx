import React from "react";
import { fetchRecipes } from "../models/Search";
import { IStoreState } from "../../reducers/index";
import { query } from "express";

interface ISearchProps {
	fetchRecipes: Function;
}
interface ISearchState {
	fetching: boolean;
	query: string;
}

export class SearchForm extends React.Component<ISearchProps, ISearchState> {
	constructor(props: ISearchProps) {
		super(props);
		this.state = {
			fetching: false,
			query: "",
		};
	}

	updateQueryValue = (e: React.FormEvent<HTMLInputElement>) => {
		this.setState({
			query: e.currentTarget.value,
		});
		console.log(this.state.query);
	};

	onButtonClick = (e: React.FormEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		this.props.fetchRecipes(this.state.query);
		this.setState({ fetching: true });
	};

	render() {
		return (
			<div>
				<form className="search">
					<input
						type="text"
						placeholder="Search"
						value={this.state.query}
						onChange={(e) => {
							this.updateQueryValue(e);
						}}
					/>
					<button className="btn search_btn" onClick={this.onButtonClick}>
						Search
					</button>
				</form>
			</div>
		);
	}
}
