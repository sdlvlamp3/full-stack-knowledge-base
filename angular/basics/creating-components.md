Creating our own components:

All of our components will be added to the app.component.html file.
All app related content will go into the app folder.

We want to output information about our server. We will create a new folder called server. (Have the folder name = the component name)

Create the component file in the designated folder. [(name of component).component.ts]

First, comoponents are simply a typescript class.

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