----------------------------------------------------------------SPLITTING INTO COMPONENTS---------------------------------------------------------------

Originally, the app was built on 1 html page, the app.component.html. Though the app was functional, the html file was large and could be made simpler through splitting our 1 page into multile components.

We split the app into 2 other components:
  cockpit
  sever-element

After doing so, we can copy/pasta much of the code that was originally on our root component into their respective component files.

Problem is that now the app requires that we get the new server that is added through our cockpit.component, to the array of servers in our app.component.
This requires us to inform our app.component that one of its child components (the cockpit.component) has changed, so that it can update its array of servers.

We also need the data from the cockpit to the array of server-element. That way the app-server-element in the app.component can display the information.

Overall, we are looking to pass data between all of our components.

----------------------------------------------------------------PROPERTY AND EVENT BINDING---------------------------------------------------------------

We need to be able to send data into a component or recieve data (recieve an event)

Property and event binding can be used on the following:

HTML Elements
  - Native properties / events

Directives
  - Custom properties / events

Components
  - Custom properties / events

----------------------------------------------------------------CUSTOM PROPERTY BINDING---------------------------------------------------------------
