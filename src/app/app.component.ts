import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';
declare var $: any;
declare var myVar: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'www.xsisec.com';

  constructor(public auth: AuthService) {

  //   $(document).ready(function () {
  //     setTimeout(function() {
  //         $('#homepage').fadeIn(1500);
  //     }, 14000);
  // });
  }
}
