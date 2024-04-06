# ANGULAR COMPONENTS:

## What are components:
 - Angular apps are made up of components.
 - Angular always starts with the <app-root> (root component), which holds the entire application. 
 - Other components are nested inside the <app-root>.
 - Example: A typical website may contain a header with buttons, a main content area, and a sidebar.
   - Each of those items are a component in our code. 
   - Each component has its own HTML template, styling, and business logic. 
   - This allows the app to split into smaller, reusable components. 
   - Making it easier to replicate the business logic / styling without having to crunch everything into one file.

## Creating components:
 - All of our components will be added to the app.component.html file.
 - All app related content will go into the app folder.
 - There are 2 ways to create a component: by hand or through the CLI.

### Components by Hand:
 1. Create a folder in side the src/app folder.
 2. Name the folder appropriately for the component (a server component is stored in the server folder)
 3. Create a file named: [NameComponent].component.ts
 4. Add an Import line and import Component from '@angular/core'
   - Ex: import { Component } from '@angular/core';
 5. Add @Component decorator with the selector and template properties.
   - Ex: @Component ( { 
           selector: 'app-[name]',
           templateUrl: './[name].component.html'
           } )
 6. Add an "export class" line
   - Ex: export class [Name]Component {  }
 7. Create a file named: [name].component.html
   - This is the template that the templateUrl property is referring to.
   - The html file is what will appear when the component is called.
 8. Add the Standalone property to the component and set the value to true.
   - Ex: @Component ( { 
           standalone: true,
           selector: 'app-[name]',
           templateUrl: './[name].component.html'
           } )


### Components through the CLI:
 - Creating components through the CLI is strongly recommended as doing so will take care of many things at once.
 1. type " ng g [element] [name]" into the cli.
   - [element] can be any element that is used by Angular such as Component, Services, Directives, Pipes, and more.\
   - [name] is the name of the file you are creating.
     - Be sure to use proper naming conventions.
 - This will create a folder with the [name] you entered. The folder will have a html file, ts file, and a css file.

## Integrating Components:
 - Angular recognizes the HTML element based on the selector property in the TypeScript file.
   - Ex: @Component ( { 
           selector: 'app-[name]',
           } )
   - Selectors MUST be unique so you do not override an existing element / component.
 - To integrate a component into another HTML page, you will add a custom HTML element with the value of the selector as the tag.
   - Ex: <app-[name]> </app-[name]>
   - Angular will look for this tag in the html file and then render that component's data where the tag is declared.

## Component Templates:
 - By default, the template selector of the Component will be set to templateUrl:'[file.path]'
   - This means the template for the component is targeting another file.
 - You can write html code into the typescript file if you have less than 3 lines of html code in the template.
   1. Change templateUrl: --> template:
   2. Use [`]'s to surround your html code.
   3. Write the html code you want the component to use inside the [`]'s
      - Ex: @Component ( { 
           standalone: true,
           selector: 'app-[name]',
           template: `<app-name></app-name>
           } ) 

## Component Styles:
 - Just like component templates, component css can be either in-line or be pointed at a file.
 - If you use in-line css, ensure that it is only a few lines long.

