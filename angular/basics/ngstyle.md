Attribute Directive =   Directives that do not add or remove elements. They only chang ethe element there were placed on.

ngStyle is an attribute directive that allows us to change the CSS style of an element dynamically.

In our example, right now the server status is always offline. Let's say that we want to change the getServerStatus to dynamically react to the serverStatus.

We change the serverStatus to have a 50/50 chance of being offline or online by adding the following code to export class ServerComponent:

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

To change the bg color based on the return of the serverStatus, we add the following code to the server.component.html:

  <p [ngStyle]="{backgroundColor: getColor()}">

    ngStyle only works with the property binding syntax [ {} ].

    ngStyle property expects to get a JS Object. Here, we define key-value pairs with the style name as the key and the value of the style as the value.

  Ex: [ngStyle]="{backgroundColor: getColor()}"

  This will have the element change the style of the background color to the return of the getColor() method.

      getColor() {
      return this.serverStatus == 'online' ? 'green' : 'red';
    }