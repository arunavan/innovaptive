import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { GraphQLModule } from './graphql.module';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ListTodosComponent } from './component/list-todos/list-todos.component';
import { ListTodoTableComponent } from './component/list-todo-table/list-todo-table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddTodoComponent } from './component/add-todo/add-todo.component';
import { UpdateTodoComponent } from './component/update-todo/update-todo.component';
import { reducers, metaReducers } from './store';

@NgModule({
  declarations: [
    AppComponent,
    ListTodosComponent,
    ListTodoTableComponent,
    AddTodoComponent,
    UpdateTodoComponent,
  ],
  imports: [
    BrowserModule,
    GraphQLModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
