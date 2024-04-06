# DATA BINDING:

## Terms:

 - Data Binding =       Two-way process of sending and receiving data.
 - Output =             Sending data from the business logic to the template.
 - Input =              Sending data from the template to the business logic.
 - Two-Way-Binding =    Combining both input and output data binding.

## Understanding Data Binding:
 - Data Binding is, essentially, communication between the TS code (business logic) and the template (HTML /  What the user sees).
 - There are different forms of data binding, but each form falls under one of the three categories:
   - Output
     - Ex: String Interpolation ( {{data}} )
     - Ex: Property Binding ( [property] ="data" )
   - Input
     - Ex: Event Binding ( (event)="expression" )
   - Two-Way-Binding
     - Ex: ( [(ngModel)]="data" )

## String Interpolation: {{data}} 
 - String Interpolation is used when you want to output something to the template and print text to it.
 - String Interpolation works by enclosing code in {{  }}
 - You can put in any TypeScript expression that returns a string.
   - Anything that goes inside the curly braces MUST return a string.
   - This means you can call methods that will return a string.
   - Or you could hard-code a string inside the curly braces.
 - String Interpolation can not have a multi-line expression like an "if" block.

## Property Binding: [property] ="data" 
 - Property binding is used when you want to change a property (like an HTML element property, a directive, or a component.)
 - Property binding works by enclosing code in [].
 - You can enclose any HTML element property, a directive, or a component in [] for property binding.
 - You must set the property equal to typescript code inside " "

## Property Binding v.s. String Interpolation:
 - String interpolation is most useful when you want to output something in the template and print some text to it.
 - Property Binding is most useful when you want to change a property (either an HTML element property, a directive, or a component).
 - You can't mix String interpolation and property binding.

## Event Binding: (event)="expression"
 - Event Binding is used when you want to something to happen based on an action the user does (like clicking a button).
 - Event binding works by enclosing an event in ().
 - You can use any of the standard HTML event attributes (onClick, onMouseEnter, etc.)
   - Remove the "on" from the HTML event attributes and enclose the remaining in ()
 - You must set the event equal to the code you want to execute. 
   - Just like property binding, the code is enclosed in " "
   - Normally, you call a method here.
   - You "could" write in the code directly inside the " ", but normally we avoid putting too much logic in our template.

### $event:
 - $event is used to access event data in your component's event handling methods.
 - In the component's methods (in the TS file), you can access the $event object to get information about the event.
 - Ex:

*//--$event html--//*                       |   *//--#event TypeScript--//*
<!-- In your component's template -->       |   @Component({ 
<input (keyup)="onKeyup($event)">           |    selector: 'app-component',
                                            |      templateUrl: './app.component.html'
                                            |    })
                                            |    export class AppComponent {
                                            |      onKeyup(event: KeyboardEvent): void {
                                            |        console.log('Key pressed:', event.key);
                                            |        // You can access all properties and methods of the event object
                                            |      }
                                            |    }

 - An input element is bound to the 'keyup' event.
 - When the 'keyup' event occurs, the 'onKeyup' method in the component is called.
 - The $event object is passed to the 'onKeyup' method, allowing you to access properties like 'event.key' to determine which key was passed.

## Two-Way-Binding: [(ngModel)]="data"
 - Two-Way-Binding is a combination of property and event binding.
 - Two-Way-Binding is used to react to events in both directions (in the template and the typescript).

