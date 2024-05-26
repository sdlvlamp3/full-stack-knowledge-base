# SERVICES AND DEPENDENCY INJECTION:

## What are services and when to use them:
 - Services are used when...
   - You want to store data.
   - You want to avoid repeating code.

## Creating a service:
 - Create a shared folder.
 - Create a services folder inside shared.
 - In the CLI, run "ng g s [serviceName]

## Using a Service for DRY Code:
 - DO NOT Instantiate services manually
   - Ex: service.logStatusChange(accountStatus)
 - Angular gives a much better tool for utilizing services, Dependency Injection.
   - A dependency is something a class will depend on.
     - Ex: NewAccount Component depends on the LoggingService because NewAccount wants to call a method inside the LoggingService.
   - The injector creates an instance of the class for the component automatically.
     - All we need to do is to inform Angular that we require such an instance.

### Using Dependency Injection:
 1. Add a constructor to the component that we want to use the service in.
 2. Bind the constructor to a property by adding (private [nameInCamelCase]: [YourService]) {}
    - This informs Angular that we need an instance of the loggingService.
 3. Add "providers: [YourService]" to the @Component properties.
    - This "provides" the service, meaning that it tells Angular how to create an instance of the service.
 4. Add this.YourService.[code you want to execute]
    - Now, Angular is creating the service for us instead of us instantiating the service manually.  

## Using a Service for Data Storage:
 - 

