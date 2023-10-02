ngStyle allows us to change the CSS style itself.

ngClass allows us to add or remove CSS classes dynamically.

In our example, we want to add a class of online to the element if the serverStatus is online.

We add the ngClass directive to the element that we want the CSS to be added/removed from:

    <p [ngStyle]="{backgroundColor: getColor()}" [ngClass]="{online: serverStatus ==='online'}">

      Similar to ngStyle, ngClass requires the property binding syntax and expects to get a JS object.

          The key = CSS class name.
          The value = Conditions determinging whether the class should be added or not.

    In the styles: property of the @Comoponent, we can add the following code:

    styles: [`
        .online {
            color: white;
        }
    `]