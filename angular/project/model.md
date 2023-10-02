Model = Typescript file with model classes.

These are used as blueprints for models that we create. This ensures that data can be communicated across all components easily and that we can use the same data structure in all components.

Label a model file like this: [name].model.ts

1. export class [Name] {}
<hr>
You do not need to add a directive to this file like we would in others.
All we need to do is define a TS class that will be exported and used in other files.

2. Define what your data should look like.

    Be as SPECIFIC as possible. Use:
      - public / private 
      - descriptive names
      - data types

3. Add constructor to instantiate this with new keywords and pass arguments.

