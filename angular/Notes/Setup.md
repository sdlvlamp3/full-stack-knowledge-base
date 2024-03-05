# SETTING UP AN ANGULAR PROJECT:

## Installing the CLI:
   1. Open a terminal
   2. cd to the correct file
   3. npm install -g @angular/cli
   4. ng new [file name]
   5. Choose Yes for Routing
   6. Use CSS for the default styling.  
   7. ng serve to run a local server to see your project.
   8. Go to http://localhost:4200/ to see your project.

## Installing Bootstrap:
   1. Navigate to the project file
   2.  Ctrl+c to stop the server
   3.  npm install --save bootstrap@[#] <-- The version of bootstrap you want to use.
   4.  Go to angular.json
   5.  BEFORE the style.css, add the following: 
       - "node_modules/bootstrap/dist/css/bootstrap.min.css",