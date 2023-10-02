The goal of the project is to create a recipe book and shopping list app.

Just like in the creation of any app, you need to plan the structure of the app and the features you want to implement. You can use the following list as a starting point:

                                                                            The Plan:
 
1. Start with the features of the app.

    What do we want our project app to do?      We want to create a shopping list and a recipe book.

2. What kind of components do we need?

    Root component that holds all other components together.
    
    Header component to navigate between 2 sections.
      
      Shopping list component to hold the shopping list.
        In the shopping list component, we need a shopping list edit component to add new items to the list.
      
      Recipe component to hold the recipe list and recipe detaail nex tto each other.
        Recipe list component to hold all the recipes.
          Recipe item component to show more details on the currently selected item.
        Recipe detail component to show the details of a recipe.

Each of the components will hold a significant amount of business logic and each component has one overall larger goal (displaying a list, displaying details of an item in the list.)

When you are planning out your app, it is good to structure your components through the overall goal the component should have.

3. Which models (data) will be used in the app?

This is to make sure that the data communicates to all components of your app easily.

    Shopping list will need:
      Ingredients

    Recipe will need:
      Name
      Description
      Image
