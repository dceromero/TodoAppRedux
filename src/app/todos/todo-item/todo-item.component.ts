import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TodoModel } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent implements OnInit {


  @Input()
  public todo: TodoModel = new TodoModel('');

  @ViewChild('txtEditFisico')
  txtEditFisico!: ElementRef;

  public chkCompleted!: FormControl;

  public txtEdit!: FormControl;

  public edit: boolean = false;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    if (!this.todo) return;
    this.chkCompleted = new FormControl(this.todo.completado);
    this.txtEdit = new FormControl(this.todo.texto, Validators.required);

    this.chkCompleted.valueChanges.subscribe(valor => {
      this.store.dispatch(actions.toggle({ id: this.todo.id }));
    });
  }

  editar() {
    this.edit = true;
    setTimeout(() => {
      this.txtEditFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.edit = false;
    if (this.txtEdit.invalid || this.txtEdit.value == this.todo.texto) {
      this.txtEdit.setValue(this.todo.texto);
      return
    }
    this.store.dispatch(actions.editarTodo({ id: this.todo.id, texto: this.txtEdit.value }))
  }

  EliminarTodo() {
    this.store.dispatch(actions.destroyById({ id: this.todo.id }));
  }

}
