We now have a section of our code that contains the data for each recipe. The problem is, right now we would have to statically recreate each recipe item in the list.

<hr>

To make this dynamic, we will use ngFor to create this section as many times as needed for each item in our list.

1. Add ngFor to the <a>. We need this to loop through the recipes array and create a new item for each recipe in the array.

We add the *ngFor directive to the <a> tag and pass the recipe of recipes array to it.
    <a href="#" class="list-group-item clearfix" *ngFor="let recipe of recipes">

2. Where we had the temporary code of the recipe name and description, we use string interpolation to add in that data dynamically.

3. For an image, the alt text should use string interpolation to target recipe.name.

4. For the image source, you can do 1 of 2 ways:

    1. String interpolation to put out l{{ recipe.imagePath }}.
    2. Property binding to bind the [src]="recipe.imagePath"