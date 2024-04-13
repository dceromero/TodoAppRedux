import { createAction, props } from "@ngrx/store";

export const filter = createAction('[Filtro] Filtro',
    props<{ filtro: string }>()
)