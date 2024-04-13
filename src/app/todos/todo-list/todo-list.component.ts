import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: ``
})
export class TodoListComponent implements OnInit{

  public todos:TodoModel[]=[];

  public filterActual:string='Todos';

  constructor(private store:Store<AppState>){
  }

  ngOnInit(): void {
    this.store.subscribe( t=> {
      this.todos = t.todos;
      this.filterActual = t.filtro;
    });
  }
}
