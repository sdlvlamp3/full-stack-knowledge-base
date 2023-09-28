String Interpolation is not completely dynamic, but it is not static either.

Use {{}} for String Interpolation

String Interpolation only requires an expression that can be resolved to a string in the end.

  In between these double curly braces, you can write a TS expression.
    The easiest would be to reference a property.
    You can also hardcode in a string
    You can also call a method (but this is not recommended)

    You cannot write multiple lines of code in between the curly braces.