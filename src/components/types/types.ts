import { IFetchRecipes } from "../models/Search";

export enum ActionTypes {
	fetchRecipes,
}

export type Action = IFetchRecipes;
