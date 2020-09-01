import * as actions from './../todos.action';
import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  @ViewChild('chkToggleAll') chkToggleAll: ElementRef;
  completado = false;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select('todos').subscribe(todos => {
      const todoNoCompletado = todos.find(t => !t.completado);
      console.log(todoNoCompletado);
      this.completado = todoNoCompletado === undefined;
      setTimeout(() => {
        this.chkToggleAll.nativeElement.checked = this.completado;
      }, 200);
    });
  }

  toggleAll() {
    this.completado = !this.completado;

    this.store.dispatch(actions.toggleAll({ completado: this.completado }));
  }
}
