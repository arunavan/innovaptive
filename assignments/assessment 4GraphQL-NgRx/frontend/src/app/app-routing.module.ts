import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTodosComponent } from './component/list-todos/list-todos.component';
import { AddTodoComponent } from './component/add-todo/add-todo.component';
import { UpdateTodoComponent } from './component/update-todo/update-todo.component';

const routes: Routes = [
  { path: 'list-todo', component: ListTodosComponent },
  { path: 'add-todo', component: AddTodoComponent },
  { path: 'update-todo/:todoId', component: UpdateTodoComponent },
  { path: '', redirectTo: '/list-todo', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
