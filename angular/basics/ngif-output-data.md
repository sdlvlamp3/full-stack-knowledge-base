Inside the example app, we have not used any directives (outside of our components) yet.

Let's say one thing that we want to  do is we only want to show this server was created text. This means we need conditional logic.

ngif statement is what we will use.

To tell angular that we want to use a structural directive, we need to add an asterisk (*) before the directive name.

ngif is a structural directive. This means it changes the structure of our Dom by either adding or removing elements.

ngif: <p *ngIf="[selector]">

ngIf statments must return boolean values. 
    If the value is true, the element will be rendered. If the value is false, the element will not be rendered.

    Could be ANYTHING that returns a boolean value.

1) Create the html element you want the ngIf statment in.
2) Add the ngIf statment to the TS file.
      Added under the export class
      Added to the logic of the contructor.

3) Add the ngIf statment to the HTML element, using the attribute as the selector.

Ex:

TS =    export class Servers Component{
          ...
          severCreated = false;

          constructor(){
            
            onCreateServer(){
              this.serverCreated = true;
              this.serverCreationStatus = 'Server was created!';
            }
          }
}


HTML = <p *ngIf="serverCreated">Server was created, {{serverName}}.</p>