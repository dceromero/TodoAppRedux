import { Pipe, PipeTransform } from '@angular/core';
import { TodoModel } from './models/todo.model';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: TodoModel[], filtro: string): TodoModel[] {
    switch (filtro) {
      case 'completados':
        return todos.filter(x=> x.completado);
      case 'pendientes':
        return todos.filter(x=> !x.completado);
      default:
        return todos;
    }

  }

}
