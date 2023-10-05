*//----------------------------------------------------------------SPLITTING INTO COMPONENTS---------------------------------------------------------------//*

+ Originally, the app was built on 1 html page, the app.component.html. Though the app was functional, the html file was large and could be made simpler through splitting our 1 page into multile components.

+ We split the app into 2 other components:
    - cockpit
    - sever-element

+ After doing so, we can copy/pasta much of the code that was originally on our root component into their respective component files.

+ Problem is that now the app requires that we get the new server that is added through our cockpit.component, to the array of servers in our app.component.
This requires us to inform our app.component that one of its child components (the cockpit.component) has changed, so that it can update its array of servers.

+ We also need the data from the cockpit to the array of server-element. That way the app-server-element in the app.component can display the information.

+ Overall, we are looking to pass data between all of our components.

*//----------------------------------------------------------------PROPERTY AND EVENT BINDING---------------------------------------------------------------//*

+ We need to be able to send data into a component or recieve data (recieve an event)

+ Property and event binding can be used on the following:

    - HTML Elements
       -- Native properties / events

    - Directives
      -- Custom properties / events

    - Components
      -- Custom properties / events

*//----------------------------------------------------------------// CUSTOM PROPERTY BINDING //---------------------------------------------------------------//*

+ Right now, we are attempting to access the name property of the element
  - So, we need to create a element property for the server-element component.
    *   export class ServerElementComponent {
      element: {type: string, name: string, content: string};
    }

+ Now the element works for the server-element.component.html, but it is NOT accessible from outside the component.

-!! BY DEFAULT, PROPERTIES OF COMPONENTS ARE NOT ACCESSIBLE OUTSIDE OF THE COMPONENT !!-

+ To allow a parent component to bind to a property of a child component, we need to add a decorator.
  - @Input()
  - This decorator allows other components to bind to the element property, even when outside of the element component.
  - the @Input() decorator MUST be imported from @angular/core

+ The steps for creating custom property binding are:
  1. Create a property in the child component.
  2. Add the @Input() decorator to the property.
  3. Bind to the property from the outside (parent) component by using [property]="data"


*//----------------------------------------------------------------// ASSIGN AN ALIAS TO CUSTOM PROPERTIES //---------------------------------------------------------------//*

+ Sometimes, we don't want to use the same property outside of the component as you do inside of the component.
  - For example, we may want to use the property name "element" inside of the component, but "srvElement" outside of the component.

+ You can assign an alias to the property by putting the name you want to use inside the () of the @Input decorator.
  - @Input('srvElement')

  *//----------------------------------------------------------------// BINDING TO CUSTOM EVENTS //---------------------------------------------------------------//*

  + Custom Property Binding allows for passing of data from a parent component down to a child component.

  + Custom Event Binding allows for passing of data from a child component up to a parent component.

  + In our example app, the cockpit is the child of the app component, but needs to pass data up to the app component.

  + First we move the of addNewServer() and addNewBlueprint() from the cockpit to the app component.
    - Changed name for it to make more sense symantically.
  
  + We then need to create a custom event on the <app-cockpit> so it can listen for when a server is created, then execute a method.
    - <app-cockpit (serverCreated)="onServerAdded($event)">
    - The $event is used to pass data from the event to the method.

  + This is then copied to be set up for blueprints.

  + At this point, our app.component is able to listen down to the cockpit for the events (serverCreated) and (blueprintCreated). But the cockpit is not emitting the events.

  + We need to create 2 new properties in the cockpit component.
    - serverCreated
    - blueprintCreated

  + To turn these properties into emitters, we need to assign new values:
    - [new] [EventEmitter]<{[type of event data that will be emitted]}>[()]
      * serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
      * blueprintCreated = new EventEmitter<{serverName: string serverContent: string}>()

  + Now that we have the data the user entered and emitters that PUSH data from the child component, we need to bundle the data and the event together, and emit it to the parent component.
    - [method](){
      this.[customEvent].emit({data that the app.component is listening for});
      }
        * onAddServer() {
          this.serverCreated.emit({
            serverName: this.newServerName,
            serverContent: this.newServerContent
          });
        }
        * onAddBlueprint() {
          this.blueprintCreated.emit({
            serverName: this.newServerName,
            serverContent: this.newServerContent
          });
        }

  + When we were using Custom Property Binding to have data SLIDE DOWN to the CHILD, we used the @Input decorator.

  + But since we want to PUSH data UP to the PARENT, we use the @Output decorator.

  + Just like how you could assign an alias for @Input, you can also assign an alias.

  + The steps for creating custom event binding are:
    1. In the app.component, in the tag of the component that is emitting data, add a custom event.
      - (customEvent)="[method]($event)"
    2. In the child component, create a property that will be the emitter
      - @Output() [customEvent] = new EventEmitter<{[type of event data that will be emitted]}>();
    3. Create methods that will push the data from the emitters to the parent component.
      - [method](){
        this.[customEvent].emit({data that the app.component is listening for});
        }

  *//----------------------------------------------------------------// VIEW ENCAPSULATION //---------------------------------------------------------------//*

  + By default, Angular adds a unique attribute to each component. This is to make sure that the styles of one component do not affect the styles of another component.

  + If you want to override this, you can use the encapsulation property in the @Component decorator.
    - encapsulation: ViewEncapsulation.( None / Native / Emulated )

*//----------------------------------------------------------------// LOCAL REFERENCES //---------------------------------------------------------------//*
