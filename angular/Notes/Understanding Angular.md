# UNDERSTANDING HOW AN ANGULAR APP IS LOADED AND STARTED:

## The app-root:
 - index.html is what is served by the server.
 - index.html has a <app-root>
 - The <app-root> is not a default html element, but is one of our own components created by the CLI. It is what ties the entire app together in the end.
 - All files in the app folder with component are related to the root component.

## The app.component.ts file:
 - In the app.component.ts file, there is an @Component decorator.
 - In the @Component, there is a selector property that assigns a string as a value and the value is 'app-root'
   - This is also defined in the index.html file as <app-root>
   - The content of the <app-root> is the app.component.html file.

## How is angular triggered?:
 - In the final index.html file, there are script imports which are injected by the CLI automatically.
 - When the browser loads the index.html file, it creates Javascript script bundles and automatically adds the right imports into the html file.
 - The main.ts file is the first code to be executed, and it is where we write our code.

## The main.ts file:
 - There are a couple imports.
 - The important line is platformBrowserDynamic().bootstrapModule(AppModule)
 - This starts our angular application by passing an appModule to the method.
 - The AppModule refers to the AppModule import in the lines above.
 - This import refers to the app.module.ts files

## The app.module.ts file...
 - There are a couple imports.
 - The important line is bootstrap: [AppComponent]
 - This tells angular to load the AppComponent as the root component.
 - The AppComponent refers to the AppComponent import in the lines above.
 - This import refers to the app.component.ts files

## The cycle:
 - Angular gets started by the main.ts file.
 - The main.ts file tells angular to load the AppModule by passing an appModule as an argument.
 - The AppModule tells angular there is an AppComponent that should be loaded as the root component.
 - Angular then analyzes the app.component file and sees that there is a selector property with the value 'app-root'.
 - Now, Angular can handle the <app-root> tag in the index.html file.