import { Component, NgZone } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = this.data.getTitle();

  private mediaMatcher: MediaQueryList =
  matchMedia(`(max-width : ${this.data.getScreenSize()}px)`);

  // links =

  constructor(private data: DataService, zone: NgZone) {
   /* this.mediaMatcher.addListener((result) => {
      zone.run(() => this.mediaMatcher = result);
    })*/
  }

  // check if the screen size is more than 720px and display sidenav
  isScreenSmall() {
    return this.mediaMatcher.matches ;
  }

  getSidenavLinks() {
    // console.log('received links: ', this.data.getLinks());
    return this.data.getLinks();
  }


}
