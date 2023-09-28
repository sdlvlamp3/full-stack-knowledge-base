Instead of using an external template file, you can also use an inline template.
  This means you define the HTML code in the TS code.

To do this:
   
   Go to the servers.component.ts
   Change templateUrl to template. (Either external or inline template must be present)
   
   Change the path to <app-server> Make sure not to wrap the line.
      To use multiple lines, use backticks (`) instead of quotes (').

   The app looks the same as before, but now the HTML code is in the TS file.

   Should you use template or external file?
    Depends on how much html code you have.

      If there is not a lot of HTML code, using inline template is fine.
      If you have more than 3 lines of HTML code, you should use an external file.