To use our own component, we need to change something with our AppModule.

AppModule is what bundles different functionalities of our app into packages. Then gives Angular the information it needs to run our app.

Similar to the component, it is an empty TS class. We transform it into something else by adding a decorator ot it.

  Here, it is the NgModule decorator, which is imported from the anuglar/core.

  Inside the decorator, we see 4 properties set up on the object we pssed to @NgModule:
      Declerations
      Imports
      Providers
      Bootstrap (we will not be touching the bootstrap array outside of AppComponent)

    The new component must now be resgistered here in the module so that Angular knows that this component exists. This is important because by default, Angular will not scan all your files here.

      If you do not tell the module that the component exists, Angular will not know about it. Therefore, we register it.

      We do this by adding the component to the declarations array. Now Angular knows that this component exists.

      HOWEVER, TypeScript does not know where to find this server component, so we have to add an import at the top. Do not add .ts at the end of the file name.

      The component can now be used.

Imports are used to import other modules. 
Because you can split up the app into multiple modules, you can import other modules into this module to make it leaner and outsource some stuff into other modules.

  By default, Angular is already split into multiple modules.
    For example, the browser module gives us the base functionality we need to start our app.


