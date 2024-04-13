import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { toggleAll } from '../todo.actions';

@Component({
  selector: 'todo-page',
  templateUrl: './page.component.html',
  styles: ``
})
export class PageComponent {

  constructor(private store:Store<AppState>){

  }

  clearAll() {
    this.store.dispatch(toggleAll());
  }


}
