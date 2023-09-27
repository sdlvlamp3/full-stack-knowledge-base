TypeScript =  A programming language that extend JavaScript. It is statically types, not dynamically typed like JS.

Dynamically Typed = A programming language that does not require you to define the type of a variable. The type will be determined automatically when the program   
                    is being processed.

Statically Typed =  A programming language that requires you to define the type of a variable. The type will be determined when the program is being compiled.


JS knows that a and b are number types because we passed 2 and 5 as arguments.

  function add(a, b) {
    return a + b;
  }

  const result = add(2, 5);

  console.log(result); 7

Problem is that the same function also works with strings.

  function add(a, b) {
    return a + b;
  }

  const result = add('2', '5');

  console.log(result); 25

TS will not allow this. It will throw an error.

  function add(a: number, b: number) {
    return a + b;
  }

  const result = add('2', '5');

  console.log(result);

    Code spits out an error right away, forcing the programmer to specify the type of every argument/variable.