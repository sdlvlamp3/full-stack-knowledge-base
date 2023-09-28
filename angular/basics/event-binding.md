The button in this exercise currently allows the user to interact with it dynamically, but the button does not send any data back to our code for it to do something once it is pressed.

For now, we want the button to output something (anything). I wan the button to output the value of a property.

  Go to /servers/app.component.html

  Add serverCreationStatus = 'No server was created!'

  Add the method onCreateServer() { this.serverCreationStatus = 'Server was created!'; }

  Now we have it so that after an action has occured, the button will output something.

  Now we want to bind the button to an event. To tell angular we are using event binding, use ([action]) = "[code of what we want to do when the event occurs]"

    Often, we will call a method. In this case, we will call the onCreateServer() method.

    Now this method will be executed whenever we click the button.

    You could also simply put the code right into the quotation marks, but this is not recommended.