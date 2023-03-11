import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTodoTableComponent } from './list-todo-table.component';

describe('ListTodoTableComponent', () => {
  let component: ListTodoTableComponent;
  let fixture: ComponentFixture<ListTodoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTodoTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTodoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
