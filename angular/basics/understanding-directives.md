What are directives?

Instructions in the dom. Components are directives with templates.

There are directives without templates.

Ex: <p appTurnGreen> Receives a green background! </p>
    This could be a directive we could builld.

    @Directive({                                   We define our directive with the @Directive decorator 
        selector: '[appTurnGreen]'                 We define the selector to be used as an attribute in the html

    })

    export class TurnGreenDirective{
      ...
    }


