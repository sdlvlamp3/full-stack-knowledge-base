Most files in the project folder do not need to be touched.

Go into the src folder, and open the app folder to begin editing the app.

Angular is not a tool that allows us to write static html files, but instead allows us to mix static html code and dynamic code that is generated by the framework.

App folder will contain css, html, and typescript files.

Upon inspecting the html in the browser, we can see that the html is not the same as the app.component.html.
We do see a large amount of script that is editing our window. This is the angular framework code.

We also see a <app-root> tag in the html. This tag is defined in the @Component section of the app.component.ts file, under the selector property. This creates our own html tag.


                                              What Angular does:

The page that we are viewing is the index.html file that can be found in the src folder.
Here, we see the <app-root> as well. The script imports are missing because they are injected dynamically by the angular framework.

What Angular does is upon loading the html page, we have thesee dynmaically-injected script imports that will dynamically replace <app-root> with our own component.
You can have more than one component per page, but you can only have one root component.

                                              Further Editing our Application:

In order to edit what our application does, we edit the app.component.html file, and the app.component.ts file.

In the example, we change the html to only include an <input type="text"> and a <p>{{Name}}</p>
We are looking to let the user change the displayed name with the input box at the top of the page.
To do this, Angular provides us with a tool called a "directive" (also called ngModel)
  inside the input tag, type [(ngModel)]="[variable name]"
  this will allow us to bind the input to the variable name, and allow us to change the variable name with the input box.
    At first, this will spit out an error because we have not imported the FormsModule into our app.module.ts file.

    Angular is split up into multiple modules (or sub-packages), so to use a module, we must import it into our app.module.ts file.

    the app.module file tells Angular which pieces belong to our app.
    There, we have to add something to imports to import another package from Angular.
    We must import it from the top of the file because TS must always know where things are.
      
      In the example we type "import { FormsModule } from '@angular/forms';"
      Then, under the imports of the @NgModule, we add FormsModule to the imports array.
        Doing this informs Angular that we want to use formfeatures in our app, like the ngModel directive.
