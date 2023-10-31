*//----------------------------------------------------------------// TYPES OF DIRECTIVES IN ANGULAR //---------------------------------------------------------------//*
 + Directives are instructions in the DOM.

 + We typically add directives with an attribute selector.
    - You can also use CSS classes or the element style.

 + Components are directives with a template.
    - We instruct angular to display our component where we have our selector in the html.
    
 + Not all directives have a template.

 + Example: 
    <p appTurnGreen>Receipe List Works!</p>                             - appTurnGreen is the directive that is added to the <p> as a selector.
                                                                        - The selector is the marker the Directive looks for in the DOM.
    @Directive({
        selector: '[appTurnGreen]'                                      - We define which selector the directive needs to look for.
    })
    export class TurnGreenDirective{                                    - We define the class that will be exported.
        ...
    }

 + There are two types of Directives that are used in Angular:
    - Structural Directives:    Used to change the structure of the DOM
    - Attribute Directives:     Used to change the appearance or behavior of an element.

*//----------------------------------------------------------------// NGIF TO CONDITIONALLY OUTPUT DATA //---------------------------------------------------------------//*

 + In order to conditionally display data on our site, we use ngIf directive.

 + ngIf is a structural directive that allows us to add or remove elements from the DOM based on a condition.

 + Using ngIf:
    - Add *ngIf to the element you want to conditionally display.
    - Set the condition in which the element is displayed inside the quotes.
        * This can be any expression returning a boolean value.
    - If the condition is true, the element will be displayed.
    - If the condition is false, the element will be removed from the DOM.
    - Create the property that will change the condition.
    - Add the property to the element with the ngIf directive.

*//----------------------------------------------------------------// NGIF WITH ELSE CONDITIONS //---------------------------------------------------------------//*

 +  ngIf can also be used with else conditions.
 
 +  Should ngIf return false, the element with the else condition will be displayed.
 
 + Using ngIf with Else conditions:
    - Create an element that you want to display should the ngIf return false.
    - Surround the element with <ng-template> </ng-template>
    - Add #[name] to the ng-template element.
    - Enhance the ngIf by adding else [name] to the end of the ngIf directive.
        * ngIf="[name]; else [name]" 
    
*//----------------------------------------------------------------// DYNAMICALLY STYLING WITH NGSTYLE/NGCLASS //---------------------------------------------------------------//*

 + ngStyle is an attribute directive that allows us to dynamically style elements.

 + Using ngStyle:
    - Add [ngStyle] to the element you want to style.
    - Set the value of ngStyle to an object.
        * The key is the style property.
        * The value is the value of the style property.
    - Create the property that will change the style.
    - Add the property to the element with the ngStyle directive.
    - [ngStyle] expects to recieve a JS object. This is where we define the key-value pairs.
        * Key = Style name
        * Value = CSS value

 + ngClass is an attribute directive that allows us to dynamically add/remove CSS classes. 

 + Using ngClass:
    - Add [ngClass] to the element you want to add/remove a class to.
    - Set the value of ngClass
    - Like ngStyle, we also use Key Value Pairs for ngClass
        * The key is the CSS Class name
        * The value is the condition determining whether this class should be attached or not.

*//----------------------------------------------------------------// OUTPUTTING LISTS WITH NGFOR //---------------------------------------------------------------//*

 + ngFor is used much like a JS For/Of loop.
    - Looping through an array.

 + Using ngFor:
    - Add *ngFor to the element
    - Set ngFor to "let [name] of [name]"