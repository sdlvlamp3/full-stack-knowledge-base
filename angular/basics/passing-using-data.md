($event):   A reserved variable name you can use in the template when using event binding. $event will simply be the data that is emitted with that event.

  We can capture this data with $event passed as an argument to the method we are calling.

Create a label for the Server Name and an input box for the user to type the name in.

We need to have our code listen for when the event is happening. We use the (input) event binder. Now we need a place to store the Updated server name.

We create a new property of the ServersCompoonent to store the serverName the user types.

We create a new method that takes an event as an argument. We need to take the value of the input event and store it in the serverName property.

onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
 }

 Now, every time the input event occurs, the code will store each letter in the serverName property.
 
 Now we have to display it on the html by adding {{ serverName }}

 This is how you use the $event object to fetch event data.