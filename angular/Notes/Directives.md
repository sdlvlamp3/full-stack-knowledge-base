# DIRECTIVES:

## What are Directives?:
 - Directives are used to give instructions to the DOM.
 - Directives are typically targeted through the attribute selector.
   - It is possible to target them through the CSS classes or HTML elements, but this is uncommon.
 - Directives are full under one of two categories: Structural or Attribute.
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



