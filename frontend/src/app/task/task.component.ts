import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';

import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {

  task: Task = {
    _id: 1,
    name: 'gym',
    detail: 'going to the gym',
    isDone: false,
    dateCreated: '27/09/2019'
  };

  taskForm: FormGroup;

  createTaskForm() {
    this.taskForm = this.formBuilder.group({
      _id: [''],
      name: [''],
      detail: [''],
      isDone: [''],
      dateCreated: ['']
    });
  }

  constructor(private formBuilder: FormBuilder) {
    this.createTaskForm();
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Your form data : ', this.taskForm.value );
}

}
