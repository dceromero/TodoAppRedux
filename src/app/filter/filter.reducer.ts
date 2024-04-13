
import { createReducer, on } from "@ngrx/store";
import {  filter } from "./filter.actions";

const initialize:string = 'Todos';

export const filtroReducer = createReducer(
    initialize,
    on(filter, (state, { filtro }) => {
      return filtro
  }),
);