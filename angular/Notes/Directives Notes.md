 *//----------------------------------------------------------------// CEREATING A BASIC ATTRIBUTE DIRECTIVE //---------------------------------------------------------------//*
  + Steps to make your own Directive:
    1. Inside the App folder, create a new folder labeled "[DirectiveName].directive.ts"
    2. Add "export class [DirectiveName] ({[object]})"
    3. Add @Directive BEFORE the export.
      - THIS MUST BE IMPORTED FROM @angular/core
    4. Give the directive a selector by adding "selector: '[[selectorName]]'
      - adding the square brackets around the selector allows me to add selectorName to an element.
    5. Add the constructor() {} to the export
      - In the list of arguments, we 


  + Example:
    - I want to make a directive that will highlight text that I hover my mouse over.

    1. Create a folder labeled "basic-highlight.directive.ts"
    2. Add "export class BasicHighlightDirective"
    3. Add @Directive and import Directive from @angular/core
    4. Add "selector: '[appBasicHighlight]' to the @Directive
    5. Add the constructor() {} to the export
