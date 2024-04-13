import { createAction, props } from '@ngrx/store';
import { TodoModel } from './models/todo.model';

export const addTodo = createAction(
    '[TODO] AddTodo',
    props<{ texto: string }>()
);

export const toggle = createAction(
    '[TODO] Toggle',
    props<{ id: number }>()
);

export const toggleAll = createAction(
    '[TODO] ToggleAll'
);

export const editarTodo = createAction(
    '[TODO] Editar',
    props<{ id: number , texto:string }>()
);

export const destroyById = createAction(
    '[TODO] DestroyById',
    props<{ id: number }>()
);

export const destroyAll = createAction(
    '[TODO] DestroyAll'
);