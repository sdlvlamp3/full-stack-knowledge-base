Adding the following to an *ngFor allows extraction of extra information, like the current index of the iteration.

    ngFor= "let server of servers; let i = index"

    With let, you can bind it to any variable name you want. 
    
    = index gives you access to the current index of the iteration.
        First loop = 0
        Second loop = 1 and so on.