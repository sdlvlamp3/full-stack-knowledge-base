# DIRECTIVES:

## What are Directives?:
 - Directives are used to give instructions to the DOM.
 - Directives are typically targeted through the attribute selector.
   - It is possible to target them through the CSS classes or HTML elements, but this is uncommon.
 - Directives fall under one of two categories: Structural or Attribute.
 - Structural Directives are used to change the structure of the DOM.
 - Attribute Directives are used to change the appearance or behavior of an element.

## Structural Directives:

### @If:
 - @If is a built-in directive that is used to conditionally display content on the webpage.
 - @if (someCondition) {
  <p>Only visible if 'someCondition' is true</p> }

### @For:
 - @For is a built-in directive that is used to display elements within an array.
 - @for (item of items; track item.id) {
  <li>{{ item.title }}</li> }

### Creating a Structural Directive:
 - Add @Input() set app[desiredMethod]() under export class.
   - @Input() set app[desiredMethod]() tells Angular to run desiredMethod whenever an input parameter changes.
   - 'Set' is the setter keyword that turns the desiredMethod from a property, to a method.
 - Add app[desiredMethod]([condition]: [type]) {}
   - ([condition]: [type]) tells what the [desiredMethod] should expect to receive as its value. 
 - Add { if (![condition]) { [codeToExecute] } else { [codeToExecute] } }
   - This adds to the @Input decorator so that when the input is triggered, it see if [condition] is not true (because of the !), and if it is true it will run the else code block.
 - Add the following to the constructor arguments:
   - constructor(private templateRef: TemplateRef<any>, private )
   - private templateRef: TemplateRef is WHAT is being rendered.
   - private vcRef: ViewContainerRef is WHERE it is being rendered.
 - With access to the ViewContainer, we can call on the vcRef whenever the [condition] changes.
 - Add the following to the if block:
   - this.vcRef.createEmbeddedView(this.templateRef);
   - This creates the template within the embedded view.
 - Add the following to the else block:
   - this.vcRef.clear();
   - This will remove everything from this place in the DOM.
   - Add the directive to the desired element by using *app[desiredMethod]

### ngSwitch:
 - A built in structural directive that 
 - Add the following to a <div> that will contain the *ngSwitch:
   - [ngSwitch]="value"
   - value is the condition that we want to check. 
 - Add *ngSwitchCase="[value]" onto the element you want to display when the [value] is met.
 - Add *ngSwitchDefault onto the element you want to display when the default value is met

## Attribute Directives:

### ngStyle:
 - ngStyle is used to dynamically update styles by binding an object to 'ngStyle' where the keys are the CSS properties you want to modify and the values are the expressions that evaluate to the style values.
 - <div [ngStyle]="{'color': 'blue', 'font-size': '12px'}">
   - This binds an object to ngStyle and gives the key-value-pairs as [styleName]:[cssValue]
 - <div [ngStyle]="getMyStyles()">
   - This binds an object to ngStyle and uses component properties to determine the style dynamically
 - <div [ngStyle]="{ 'background-color': condition ? 'green' : 'pink', 'border-radius': condition ? '5px' : '0px' }">
   - This applies different styles depending on conditions.
   - 'condition' is a boolean expression (or property) in the component that returns a boolean value.
   - The style JS object passed to 'ngStyle' is dynamic, allowing you to set styles based on component logic.


### ngClass:
 - ngClass allows us to add or remove CSS classes to elements based on an expression's evaluation. 
 - <div [ngClass]="{'active': isActive}"></div>
   - This adds or removes a single class based on a boolean response
   - 'active' class is added to the <div> if the 'isActive' property in the component is true.
 - <div [ngClass]="{'active': isActive, 'disabled': isDisabled}"></div>
   - This adds or removes the 'active' class if 'isActive' is true and the 'disabled' class will be added if 'isDisabled' is true.
 - <div [ngClass]="classObject"></div>
   - This binds 'ngClass' with an object in the component's TypeScript code.
   - This will add the 'active' and 'visible' classes to the <div> based on the 'classObject' definition.
 - <div [ngClass]="['active', 'visible']"></div>
   - You can pass an array of classes that you want to add to the element.

### Creating a Basic Attribute Directive:
 1. Create a folder with the name of you directive using the "-" to separate words.
    - [name1]-[name2] 
 2. In the new folder, create a file with the following naming conventions:
    - [name1]-[name2].directive.ts
 3. Add "import { Directive } from '@angular/core';"
 4. Add the "@Directive( { } )" decorator to the file.
 5. Add the following attributes to the Directive object:
    - selector: '[appNameInCamelCase]'
 6. Add "export class [NameInTitleCase] implements OnInit{}"
 7. Add "constructor() {}" inside the export class
 8. Add "private elementRef: ElementRef" to the arguments of the constructor.
 9. Add "ngOnInit() {}"
 - Your code often goes inside the "{}" of whichever lifecycle hook you want to use.
 - Ex: this.elementRef.nativeElement.style.backgroundColor = 'green'
   - this.elementRef refers to the elementRef we declared in our export class which gives us access to whatever ElementRef our directive was placed on.
   - nativeElement gives us access to the exact element
   - style.backgroundColor  = 'green' gives us access to the style, specifically the background color, and lets us set the value to green.
 1.  Add the appropriate imports for the Directive on any file you wish to use the directive in.
 2.  Add the selector onto the html element you want the directive to change.

### Creating an Advanced Attribute Directive:
 - The Basic Attribute Directive is not good practice because it targets something in the DOM.
 - Better practice would be to use Renderer in our Directive.
 1. Create a Directives folder inside the Shared folder.
 2. In the Directives folder, use the CLI command ng g d [name-with-hyphens]
 3. Add "implements OnInit" to the export class.
 4. Add "ngOnInit() {}" under the constructor.
 5. In the constructor arguments, add "private renderer: Renderer2"
 6. Add your code into the object of your lifecycle hook.
 - Ex: this.renderer.setStyle()

## Making Directives Dynamic:

### HostListener:
 - @HostListener is a decorator that declares a DOM event to listen for and provides a method to run when that event occurs.
 - HostListener is set up like this:
   - @HostListener ( '[DOMEventToListenFor]' ) [desiredMethod] (eventData: Event / CustomEventData) { [CodeYouWantToExecute] }
   - Ex: @HostListener ( 'mouseenter' ) mouseover (eventData: Event) { this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue', false, false) }
     - @HostListener ('mouseenter') mouseover(eventData: Event) means that the @HostListener is listening for a 'mouseenter' event. 
     - When mouseenter occurs, it will execute the mouseover method and execute the code inside the {}.

### HostBinding:
 - @HostBinding is a decorator that marks a DOM property or an element's class, style or attribute as a host-binding property. 
 - This allows us to access DOM properties and work with the element inside the directive.
 - HostBinding is set up like this:
   - @HostBinding ('[property].[subProperty]') [desiredMethod]: [type] = '[value]'
   - Ex: @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent'
     - @HostBinding('style.backgroundColor') gives us access to the background color within the style property.
     - backgroundColor: string = 'transparent' means that the backgroundColor of the element this directive sits on is initially transparent.
     - When a @HostListener triggers the backgroundColor method to set it to a new value, the @HostBinding is what gives us access to the element without using the renderer.
