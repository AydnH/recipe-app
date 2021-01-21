import axios from "axios";
import { response } from "express";
import { Dispatch } from "redux";
import { ActionTypes } from "../types/types";

export interface IFetchRecipes {
	type: ActionTypes.fetchRecipes;
	payload: any;
}

export const fetchRecipes = (query: string) => {
	return async (dispatch: Dispatch) => {
		try {
			const res = await axios(
				`https://forkify-api.herokuapp.com/api/search?&q=${query}`
			);
			dispatch<IFetchRecipes>({
				type: ActionTypes.fetchRecipes,
				payload: res.data.recipes,
			});
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};
};
