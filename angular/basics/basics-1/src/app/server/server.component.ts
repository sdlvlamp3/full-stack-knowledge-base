import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
    constructor() {
        this.serverId = 10;
        this.serverStatus = 'offline';
    }
    getServerStatus() {
        return this.serverStatus;
    }
}
