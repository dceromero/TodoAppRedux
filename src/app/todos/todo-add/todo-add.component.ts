import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoModel } from '../models/todo.model';
import * as actions from '../todo.actions';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: ``
})
export class TodoAddComponent {

  public todos: TodoModel[] = [];

  txtAdd: FormControl;

  constructor(private store: Store<AppState>) {
    this.txtAdd = new FormControl('',Validators.required);
    this.store.select('todos').subscribe(t => this.todos = t);
  }

  crearTodo() {
    if (this.txtAdd.invalid) return;
    this.store.dispatch(actions.addTodo({ texto: this.txtAdd.value }));
    this.txtAdd.reset();
  }
}
