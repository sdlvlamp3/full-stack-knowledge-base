Similar to how the recipe required a model, the ingredients will as well. However, because the ingredient data will be used by multiple components, we will create a shared folder to hold the model.

1. Create a folder called shared in the app folder.

2. Inside the shared folder, create a file called ingredient.model.ts.

3. In the ingredient.model.ts, export a class called Ingredient.

    Now, we could set it up to look exactly how the recipe model looks, but that format is so widely used, there is a shortcute to create it.

        export class Ingredient {
          public name: string;
          public amount: number;

          constructor(name: string, amount: number){
            this.name = name;
            this.amount = amount;
          }
        }

    Instead of typing the declaration of variables, the constructor, and the arguments, we can the accessor in front of the constructor arguments.

        export class Ingredient {
          constructor(public name: string, public amount: number){
          }
        }

  Behind the scenes, this will automatically give us properties with the same name and assign the values passed in to them.