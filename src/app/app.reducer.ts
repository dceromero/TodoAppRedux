import {  ActionReducerMap } from "@ngrx/store";
import { TodoModel } from "./todos/models/todo.model";
import { todosReducer } from "./todos/todo.reducer";
import { filtroReducer } from "./filter/filter.reducer";

export interface AppState{
    todos:TodoModel[],
    filtro: string
}

export const appReducer:ActionReducerMap<AppState>={
    todos:todosReducer,
    filtro:filtroReducer
}