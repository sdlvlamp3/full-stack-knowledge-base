Databinding:  communication between the TS code of the component and the HTML template that the user sees.

Output data:  from the TS code to the template (e.g. a variable in the TS code is displayed in the template)

  String interpolation: ({{ data }})
  Property binding: ([property]="data")

Input data:  from the template to the TS code (e.g. a user input in the template is used in the TS code)

  Event binding: ((event)="expression")

You can combine these two types of binding in one expression: Two-way-bindin

  ( [(ngModel)]="data" )

