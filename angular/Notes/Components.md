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
 - We want to output information about our server. We will create a new folder called server. (Have the folder name = the component name)
 - Create the component file in the designated folder. [(name of component).component.ts]

<!-- 3/5/24 stopped here: creating comoponents. Should I write down how to do it or just the CLI part? -->
First, components are simply a typescript class.

Make sure to export the class so it can be used outside of this file. (name it as [name]/[description])

To tell Angular that this is not only a normal TS class but also a component, we need to add a decorator. 
  A decorator is a TS feature that allows us to enhance our classes. We do this by adding @Component({}) above the class.

Because TS does not know what the decorator is, we need to import it from the Angular core library. (import { Component } from '@angular/core';)

Now we must pass a JS object into this component decorator to configure it.
  Here we set up important information which will be stored as metadata for this class in the background. This will tell Angular what to do with this class.

A super important piece is the selector property.
   The selector should be a string. It needs to be a unique name. Setup as "app-[name of component]". This will be used as a HTML tag in the app.component.html file.
   Later, we can use this component in other components by using this selector.

Next, we need the template.
  Using templateUrl: property, we reference another external file. This file will hold the HTML code for this component.
  The property needs to have the relative path to the file. (./[name of component].component.html)

The selector must be unique so you do not override an existing element/component.

Angular recognizes what element you want the component to target based on what you put in the selector. 
  If you put in `app-servers`, Angular will look for `<app-servers></app-servers>` in the HTML file. If you put in `app-servers` in the HTML file, Angular will look for `<app-servers></app-servers>` in the component file.

The selector can be any valid CSS selector:
  - Element selector: `app-servers` (matches `<app-servers></app-servers>`)
  - Class selector: `.app-servers` (matches `<div class="app-servers"></div>`)
  - Attribute selector: `[app-servers]` (matches `<div app-servers></div>`)

The element selector is the most commonly used selector for components.

You can adjsut the style of the component through the app.component.css file.

You can also choose whether you want to do the styling either inline or in an external file.

Change the styleUrls to styles to do inline styling.

You must choose one or the other, cannot do both.

There is an alternative to creating a component by hand.

Using the CLI, you can open the terminal and use some commands to create a new component.

Lets say we want to use our single sever component here in another component (i.e. nested into another component) We could do this by hand and create a servers folder and the files needed, or we can use the terminal by entering the folowing commands.

1. ng generate [element] [name] // This will let us generate some elements supported by Angular, like components, services, directives, pipes, etc.

after hitting enter, it should create a new folder and should find the same files for other components.

Lets say that it is from our servers component that we output our single server.

  We already have the decorator and selector, <app-server>, so in the servers.component.html, we add the <app-server> tag.
  
  After that, we need to update the AppModule. The CLI should do this automatically, but if not, we need to add the new component to the declarations array.

  Lastsly, return to the app.component.html and add the <app-servers> tag.
