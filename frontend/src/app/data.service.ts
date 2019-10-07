import { Injectable } from '@angular/core';
import { AppData } from './model/appData';

const appData: AppData = {
  title: 'Todo Task List',
  MAX_SCREEN_WIDTH_BREAKPOINT: 720,
  links: [
    {
      name: 'home',
      url: '/',
      icon: 'home'
    },
    {
      name: 'aboutus',
      url: '/about',
      icon: 'contact_mail'
    },
    {
      name: 'login',
      url: '/login',
      icon: 'person'
    },
    {
      name: 'task list',
      url: '/tasks',
      icon: 'list_alt'
    }
  ]
 };
const  title = 'Todo Task List';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getScreenSize() {
    return appData.MAX_SCREEN_WIDTH_BREAKPOINT ;
  }

  getTitle() {
    return appData.title;
  }

  getLinks() {
    return appData.links;
  }
}
