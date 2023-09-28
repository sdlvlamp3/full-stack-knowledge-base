How does the browser know it should render app.component.html?

index.html is what is served by the server.

index.html has a <app-root> tag with "Loading..." inside it.

the <app-root> is not a default html element, but is one of our own components created by the CLI

  The root component. This is what ties the entire app together in the end.\

  All files in the app folder with component are related to the root component.

In the app.component.ts file, there is an @Component decorator.

  In it, there is a selector property with the value 'app-root'.
  This is also defined in the index.html file.


How is angular triggered?

  in the final index.html file, there are script imports which are injected by the cli automatically.

  When the browser loads the index.html file, it creates js script bundles and automatically add the right imports into the html file.

  the main.ts file is the first code to be executed, and it is where we write our code.

In the main.ts file... 

  There are a couple imports.

  The important line is platformBrowserDynamic().bootstrapModule(AppModule)
    
   This has bootstrap start our angular application by passing an appModule to the method.
      
     The AppModule refers to the AppModule import in the lines above.
     This import refers to the app.module.ts files

In the app.module.ts file...

  There are a couple imports.

  The important line is bootstrap: [AppComponent]

    This tells angular to load the AppComponent as the root component.

    The AppComponent refers to the AppComponent import in the lines above.
    This import refers to the app.component.ts files

The cycle is as follows:

  Angular gets started by the main.ts file.
  
  The main.ts file tells angular to load the AppModule by passing an appModule as an argument.

  The AppModule tells angular there is an AppComponent that should be loaded as the root component.

  Angular then analyzes the app.component file and sees that there is a selector property with the value 'app-root'.

  Now, Angular can handle the <app-root> tag in the index.html file.
    This is the selector I know, you told me that I should know it because it was listed in this bootstrap arrray in the AppModule component.
    Here, I should insert the app.component, which happens to have html code.