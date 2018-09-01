import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;
declare var Typed:any;
declare var mystring:any;
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

mystring='hello';

  title = 'abgular 4 with jquery';
  //function
  toggleTitle(){
    $('.title').slideToggle(); 

    //
    console.log(mystring);
  }



  constructor() { }

  ngOnInit() {

    var terminalTyped = new Typed("#terminalType", 
    {
      strings: ['^1000Uncompressing Linux... done, booting the kernel.<br>`<span class="terminal-user">[    0.000000] Booting Linux on physical CPU 0x0</span><br>[    0.000000] Initializing cgroup subsys cpu<br>[    0.000000] Linux version 9.18.10+ (compiled by gcc version 4.8.3)<br>`^500 [    0.001931] Mount-cache hash table entries: 1024 (order: 0, 4096 bytes)^1000 <br>`[    0.001997] Mountpoint-cache hash table entries: 1024 (order: 0, 4096 bytes)<br>[    0.003000] Initializing cgroup subsys memory<br>[    0.003093] Initializing cgroup subsys devices<br>[    0.003151] Initializing cgroup subsys freezer<br>[    0.003204] Initializing cgroup subsys net_cls<br>[    0.003254] Initializing cgroup subsys blkio<br><span class="terminal-user"> /etc/apache2/sites-available$</span>`^2000a2ensite 000-default.conf<br>'],
      cursorChar: '█',
      typeSpeed: 10,
      backspeed: 0,
      backDelay: 3000,
      loop: false,
      onComplete: function(self) 
      {
        setTimeout(function() {
          self.reset();
        }, 1000);
      }
    });
    
  }

}
