import { Injectable } from '@angular/core';
const MAX_SCREEN_WIDTH_BREAKPOINT = 720;
const  title = 'Todo Task List';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getScreenSize() {
    return MAX_SCREEN_WIDTH_BREAKPOINT ;
  }

  getTitle() {
    return title;
  }
}
