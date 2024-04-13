
import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { TodoModel } from './models/todo.model';

export const estadoInicial: TodoModel[] = [
    new TodoModel('aprender ingles'),
    new TodoModel('aprender angular'),
    new TodoModel('aprender rxjs')
];

export const todosReducer = createReducer(
    estadoInicial,
    on(actions.addTodo, (state, { texto }) => {
        return [...state, crearTodo(texto)]
    }),

    on(actions.toggle, (state, { id }) => {
        return toggleTodo(state, id);
    }),

    on(actions.toggleAll, (state) => {
        return toggleAll(state);
    }),

    on(actions.editarTodo, (state, { id, texto }) => {
        return editarTodo(state, id, texto);
    }),

    on(actions.destroyById, (state, { id }) => {
        return destroyById(state, id);
    }),

    on(actions.destroyAll, (state) => destroyAll(state)),
);


function destroyAll(state:TodoModel[]){
    return [...state.filter(x=> !x.completado)];
}

function crearTodo(texto: string): TodoModel {
    return new TodoModel(texto);
}


function toggleAll(state: TodoModel[]): TodoModel[] {
    const todo = state.map(x => {
        return {
            ...x,
            completado: !x.completado
        };
    })
    return todo;
}

function toggleTodo(state: TodoModel[], id: number): TodoModel[] {
    const todo = state.map(x => {
        if (x.id == id) {
            return {
                ...x,
                completado: !x.completado
            };
        }
        return x;
    })
    return todo;
}

function editarTodo(state: TodoModel[], id: number, texto: string): TodoModel[] {
    const todos = state.map(x => {
        if (x.id == id) {
            return {
                ...x,
                texto
            };
        }
        return x;
    })
    return todos;
}

function destroyById(state: TodoModel[], id: number): TodoModel[] {
    const todo = state.filter(x => x.id !== id);
    return [...todo];
}


