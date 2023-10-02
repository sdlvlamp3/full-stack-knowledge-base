Currently, in our example when we add servers, they are not added to the list that is displayed beneath the input.

    This is because in the html, below the input, we have <app-server> added in manually.

We can change this using ngFor to create an array of servers that can be added to dynamically. To do this, we add the following to the server.component.ts:

    export class ServersComponent {
      servers = ['Testserver', 'Testserver 2'];
    }
    
    onCreateServer() {
      this.servers.push(this.serverName);
    }

We now need to define the servers arry in our html.

    <app-server *ngFor="let server of servers"></app-server>

ngFor is a structural directive that allows us to loop through an array and output data.

In our example, the *ngFor is looping through all elements in the defined array (in the export class) and assigns the individual element to the dynamic server variable.

