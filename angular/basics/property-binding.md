There are many times that you can use either String Interpolation or Property Binding.

Lets say that we want to allow the user to add new servers to the list of servers.
  
  We will need a button. Add the button to the servers.component.html file.
  
  Ensure that the @Component is targeting the correct files.
  
  Add a new property to the export class ServersComponent
    allowNewServer = false; // The user will be unable to create a new server.
  
  Now I want to disable the button, but hardcoding in disabled attribute means that it will never change.

  Instead, we can use property binding to bind the property to the button. That way when the data is dynamic, the button will change.

    Add the following to the allowNewServer:

      constructor() {
        setTimeout(() => {
          this.allowNewServer = true;
        }, 2000);
      }

    Then, surround the "disabled" property with []. This tells Angular that we are using property binding, dynamically bind a property to disable the html attribute.

  You can bind to many different kinds of property like directives.
  