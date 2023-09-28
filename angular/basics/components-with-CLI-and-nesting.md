There is an alternative to creating a component by hand.

Using the CLI, you can open the terminal and use some commands to create a new component.

Lets say we want to use our single sever component here in another component (i.e. nested into another component) We could do this by hand and create a servers folder and the files needed, or we can use the terminal by entering the folowing commands.

1. ng generate [element] [name] // This will let us generate some elements supported by Angular, like components, services, directives, pipes, etc.

after hitting enter, it should create a new folder and should find the same files for other components.

Lets say that it is from our servers component that we output our single server.

  We already have the decorator and selector, <app-server>, so in the servers.component.html, we add the <app-server> tag.
  
  After that, we need to update the AppModule. The CLI should do this automatically, but if not, we need to add the new component to the declarations array.

  Lastsly, return to the app.component.html and add the <app-servers> tag.