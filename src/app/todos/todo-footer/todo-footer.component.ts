import * as filterActions from './../../filter/filter.actions';
import { Component } from '@angular/core';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: ``
})
export class TodoFooterComponent {

  count: number = 0;

  arrayFilter: string[] = ['todos', 'completados', 'pendientes'];

  filtroActual: string = 'todos';

  constructor(private store: Store<AppState>) {


    this.store.subscribe(todo => {
      this.count = todo.todos.filter(x => !x.completado).length;
      this.filtroActual = todo.filtro;
    })
  }

  clearAll() {
    this.store.dispatch(actions.destroyAll());
  }

  changeState(filtro: string) {
    this.store.dispatch(filterActions.filter({ filtro }))
  }

}
