import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
/*   template: `
  <app-server></app-server>
  <app-server></app-server>`, */
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

    onCreateServer() {
      this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
 }
}
