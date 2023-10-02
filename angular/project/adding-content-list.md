We have added our recipe model create a custom data type for our recipe

Under the export of the recipe-list.components.ts, we define our recipe as having type Recipe (our model) and we define it as an array of recipes.

  recipes: Recipe[] = [];

<hr>

With our export created and the data defined by a model, we now get to start adding items to our array of recipes.

  Use the "new" keyword to call on the Recipe method.
  Inside the (), pass the arguments that you defined in the Recipe model.

<hr>

In order to see our data of the recipe item, you need to edit the tetmplate of the recipe list to display it.

We need a button to create a new recipe:
<div class="row">
  <div class="col-xs-12">
    <button class="btn btn-success">New Recipe</button> 
  </div>

<hr>
For now, we can't get our recipe item data into the recipe list, as the item has not been defined yet.

We will input the code that WILL be in the recipe-item in manually just so we can see what it will look like.
<hr>

For each item we will need:

  1.  A <div class="row"> to hold the item.
  2.  A <div class="col-xs-12">to hold the item.
  3.  A <a href="#" class="lsit-group-item clearfix"> to have the item be clickable.
  4.  A <div class="pull-left"> <h4 class="list-group-item-heading">Recipe Name</h4> to hold the Recipe title
  5.  A <p class="list-group-item-text">Description</p>
  6. <span class="pull-right"> to hold the recipe description.
          <img src+="[NEEDED]" alt="[NEEDED]" class="img-responsive" style="max-height: 50px;">
        </span> to hold the recipe image.

<hr>

Put together, it looks like this

      <a href="#" class="list-group-item clearfix"></a>
        <div class="pull-left">
          <h4 class="list-group-item-heading">Recipe Name</h4>
          <p class="list-group-item-text">Description</p>
        </div>
        <span class="pull-right">
          <img src+="[NEEDED]" alt="[NEEDED]" class="img-responsive" style="max-height: 50px;">
        </span>

This can be copied and filled in accordingly as many times as necessary for each itme in the recipe list.