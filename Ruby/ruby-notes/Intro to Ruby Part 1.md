*//------------------------------------------------------------INTRO TO RUBY PART 1: DATA TYPES------------------------------------------------------------//*

 # What are data types?
   - A classification that dictates what sort of value a variable can hold and how the computer interprets that value.
     * Ex: Variables can hold a string of characters, a number, or a boolean.
   - The data type determines what operations can be performed on the data, and how the data is stored in memory.

 # Why are Data types important?
   - Memory management
     * Data types help allocating / managing memory because different data types consume different amounts of memory.
     * By specifying data types, the computer can allocate just the right amount of memory.
   - Operation Validity
     *  Data types define what operations can be performed on a set of data.
     *  Arithmetic operations are typically valid on numbers, but not on strings or booleans.
   - Error Prevention
     *  Specifying data types prevents errors.
     *  Ex: Trying to perform a mathematical operation on a text string would be nonsensical and could lead to errors if not properly handled.
   - Code Readability / Maintenance
     *  Knowing the types of data being dealt with makes code easier to maintain and understand.
     *  It makes it clear what kind of data is being passed and manipulated in the program.

 # Common Data Types:
   - Numbers
     * Broad category that includes whole numbers and floats that are used for arithmetic operations and calculations. 
   - Strings
     * Textual data that can include letters, numbers, and various symbols, typically used for manipulating texts.
   - Booleans
     * True / False values that control structures and decision-making in programming.
   - Arrays (lists)
     * Collections of elements where each element is of a consistent type.
   - Hashes (dictionaries) 
     * Collections of key-value pairs where each key is unique. They are used to store and manipulate data in the form of key-value pairs.
   - Null / Nil Values
     * Represent the absence of a value or a 'nothing' state. They are used to denote that a variable currently holds no valid data.

 # Ruby Primitive Data Types:
   - Primitive Data types are the basic types of data with which most languages start.
     * Ex: Integers, floats, booleans, characters.
   - Often directly supported by the underlying hardware and represent single values.

 # Strings in Ruby:
   - Strings are textual data.
   - Strings are typically enclosed in a single or double quotes.
     * "Hello World" / 'Hello World'
   - IN RUBY, whether you use single (' ') or double (" ") quotes can affect their behavior. Particularly in terms of escape sequences and string interpolation.
   - Single Quotes: Simpler and more literal. Best sued when you need a string exactly as it is without any additional processing.
     * puts 'Hello\nWorld' --> Output: Hello\nWorld 
     * \n typically creates a new line, but because the string is in single quotes, it outputs the character as printed.
   - Double Quotes: More flexible and allow for escape sequences and string interpolation.
     * name = "Ruby"                                --> output: Hello, Ruby!
       puts "Hello #{name}!\nWelcome to programming!"           Welcome to programming!
   - Escape Sequences: special characters that are preceded by a backslash ( \ ) to denote a special meaning.
     - Ex: \n = newline character, \t = tab, \\ represents backslash

 # Numbers in Ruby:
   - IN RUBY, numbers mainly fall into two categories: integers or floating-point numbers.
   - Integers are whole numbers without a decimal point. They can be positive, negative, or zero. 
     * Ruby handles integers very efficiently and they can be used for counting, iterating, and various mathematical operations.
     * Ruby integers can be of any length, limited only by the memory of the machine.
   - Floating-point numbers, or floats, are numbers with a decimal point. They are used when more precision is required in scientific calculations or working with fractions.

 # Booleans in Ruby:
   - Booleans come in two flavors: true and false
     * true: This is a Ruby object that represents truth. It is an instance of the TrueClass
     * false: Represents falsehood and is an instance of the FalseClass
   - Ruby only has one strict rules about what is considered true or false. Unlike some languages, in Ruby, only false and nil (Ruby's way of saying nothing / no value) are treated as false 
     in conditional expressions. Every other value, including 0, "" (empty string), and [] (empty array), is considered true.

 # Complex Data Types:
   - More sophisticated and can represent a collection of more complex entities.
   - Arrays, lists, objects, and dictionaries are all examples of complex data types.
   - They are constructed using primitive data types and other complex data types.

 # Arrays in Ruby:
   - Versatile and essential data structures in Ruby, used to store collections of items. These items can be of any type, including numbers, strings, or even other arrays.
   - An array is an ORDERED list of elements. Each element in an array is associated with an index, which is a numerical representation of the item's position in the list.
   - Arrays can be created in several ways in Ruby:
     * Using [ ], the most common way to create an array.
       ~ numbers = [1, 2, 3, 4, 5]
       ~ words = ['hello', 'world']
       ~ mixed = [1, 'two', 3.0, [4, 'five']]
     * Using the Array.new Method: This method creates an array with specifies size and default value.
       ~ empty_array = Array.new(3)  --> [nil, nil, nil]
       ~ zeros = Array.new(3, 0)     --> [0, 0, 0]
   - To access an element in an array, you use their index. Ruby arrays are always zero-indexed, meaning the first element is always 0.
   - array = [10, 20, 30, 40, 50]
     * puts array[0]   --> 10
     * puts array[2]   --> 30
     * puts array[-1]  --> 50 (last element)
   - Elements can be added to an array using methods like push, << or insert
     * array = []
     * array.push(1)
     * array << 2
     * array.insert(1, 1.5) --> [1, 1.5, 2] 

 # Hashes:
   - AKA associative arrays (dictionaries in some other languages) are collections of key-value pairs.
   - They are similar to objects in that they store data in a structured way, but they are not the same as objects created from custom classes.
     * Key-Value Pairs: Each entry in a hash consists of a key and a value. They key is used to retrieve the corresponding value.
     * Flexible Keys and Values: Hash keys and values can be objects of any type, including numbers, strings, or even arrays.
   - Creating hashes in Ruby is straightforward:
     * my_hash - {
        'name' => 'Alice',
        'age' => 30,
        'is_student => true
        }
   - You can access or modify hash values using their keys:
     * puts my_hash['name']   # => Alice
     * my_hash['age'] = 31    # Update the age
   - Ruby allows for the use of symbols as hash keys, which is a common practice due to their efficiency and readability.
     * Old Syntax --> student = {
                      :name => 'Bob',
                      :grade => 'A'
                      }
     * New Syntax --> student = {
                      name: => 'Bob',
                      grade: => 'A'
                      }

 # Special Case of 'nil' in Ruby:
   - In Ruby, nil plays a unique and essential role. It is a value that represents the concept of "nothing" or "no value". Understanding nil is crucial for effective Ruby programming.
   - It is commonly returned by methods that have no meaningful value to return, or when an operation (such as searching an array) does not yield a result.

 # Ruby Variables:
   - Variables are fundamental in programming and serve as placeholders for storing data values.
   - In Ruby, variables are particularly versatile and easy to use.

 # What are variables: 
   - Variables are like storage containers where data is stored. Once a value is assigned to a variable, you can use the variable's name to access that value.
   - Ruby is a dynamically typed language, meaning you don't need to declare a variable's type beforehand. The type is inferred at runtime.

 # Variables in Ruby:
   - Ruby has different types of variables, each with its own scope and purpose.
   - Local Variables begin with lowercase letter or an underscore. Their scope is limited to the block, method, or class in which they are defined.
     * local_var = "I'm local"
   - Constant Variables are a special type of variable whose value cannot be changed once assigned. They begin with an uppercase letter.
     * CONSTANT_VAR = 3.14
   - You assign a value to a variable by using = and if you need to reassign a variable, you can simply assign a new value to it.
     * my_var = 10
       my_var = "Now I'm a string"
   - Variables have meaningful names that make your code readable and descriptive.
   - Variables are written in Snake_case (using lowercase letters with underscores to separate the words.)

 # Arithmetic Operators:
   - Arithmetic operations are a fundamental aspect of programming, allowing for the manipulation and calculation of numeric data. 
     * Addition (+)           Add two numbers
       ~ 5 + 3 --> 8
     * Subtraction (-)        Subtract the second number from the first
       ~ 5 - 3 --> 2
     * Multiplication (\*)    Multiplies two numbers
       ~ 5 * 3  --> 15 
     * Division (/)           Divides the first number by the second. In Ruby, the result of dividing two integers is an integer. To get a decimal as a result, at least one of the operands 
                              must be a float.
       ~ 10 / 2       --> 5 
       ~ = 10.0 / 3   --> 3.3333333333333335
     * Exponentiation (\*\*)  Raises a number to the power of another number
       ~ 2 ** 3       --> 8
     * Modulus (%)            Returns the remainder of dividing the first number by the second.
       ~ 10 % 3        --> 1

 # Division Quirks in Ruby:
   - When dividing two integers, Ruby performs integer division, meaning it will return an integer and truncate any decimal point.
     * result = 10 / 4 --> 2
     * float_result = 10 / 4.0 --> 2.5  
   - Variables can be used in place of literal numbers in arithmetic operations.
     * x = 10
       y = 5
       sum = x + y         --> 15
       difference = x - y  --> 5

 # Order of Operations:
   - The order of operations in Ruby is the same as in mathematics (PEMDAS)
     * result = 10 + 5 * 3  --> 25

 # Compound Assignment Operators:
   - Ruby also supports compound assignment operators, which combine an arithmetic operation with assignment.
     * a = 10
       a += 5  # Equivalent to a = a + 5
       a -= 2  # Equivalent to a = a - 2 

 # Strings and Arithmetic Operators:
   - Strings can be concatenated using the + operator or the << operator. The + creates a new string, while << operator modifies the original string.
     * first_name = "John"
       last_name = "Doe"
       full_name = first_name + " " + last_name   --> "John Doe"
       first_name << last_name                    --> "JohnDoe" 
   - You don't typically use the shover operator (<<) with strings, but it does exist.
   - String interpolation is another way to combine strings. It allows you to embed Ruby expressions within a string. To use string interpolation, you need to use double quotes.
     * first_name = "John"
       last_name = "Doe"
       full_name = "#{first_name} #{last_name}"  --> "John Doe"  
   - In Ruby, trying to add a number directly to a string will result in a TypeError because Ruby does not implicitly convert types during arithmetic.
     * "Hello" + 3 --> TypeError

 # Conditional Operators and Control Flow:
   - Conditional Operators are used to perform different actions based on different conditions. They are a fundamental aspect of programming that allows for decision-making and control  
     flow. These operators evaluate an expression to true or false, and are essential for controlling the flow of a Ruby program.

 # Common Conditional Operators in Ruby:
   - Equal to ( == ) Checks if two values are equal.
     * 5 == 5  --> true
       5 == 6  --> false
   - Not equal to ( != ) Checks if two values are not equal.
     * 5 != 6  --> true
       5 != 5  --> false
   - Greater than ( > ) Checks if the first value is greater than the second.
     * 5 > 3   --> true
   - Lesser than ( < ) Checks if the first value is lesser than the second.
     * 5 < 3   --> false
   - Greater than or equal to ( >= ) Checks if the first value is greater than or equal to the second.
     * 5 >= 5  --> true 
   - Less than or equal to ( <= ) Checks if the first value is lesser than or equal to the second.
     * 5 <= 4  --> false
   - Combined Comparison ( <=> ) Checks if the first value is less than, equal to, or greater than the second. It returns 0 if the values are equal, 1 if the first value is greater,
                                 and -1 if the first value is less.

 # Logical Operators:
   - Logical operators are used to combine multiple conditions. They are typically used in conditional statements to determine whether a statement or condition is true or false.
   - And ( && ) Returns true if both conditions are true.
     * true && true    --> true
       true && false   --> false
       false && false  --> false 
   - Or ( || ) Returns true if either condition is true.
     * true || true    --> true
       true || false   --> true
       false || false  --> false
   - Not ( ! ) Returns true if the conditions are false. 
     * !true   --> false
       !false  --> true
   - The ternary operator is another conditional operator that is used to shorten if/then statements. It is a shorthand way of writing if/else statement in a single line.
     * condition ? true_value : false_value 
     * ( ? ) represents the if, ( : ) represents the else.
     * The condition is evaluated, and if it is true, the true_value is returned. Otherwise the false_value is returned.
     * age = 18
       age >= 18 ? "You can vote!" : "You can't vote."

 # Control Flow with Conditional Statements:
   - Control Flow in programming refers to the order in which individual statements, instructions or function calls are executed or evaluated.
   - In Ruby, control flow dictates how a program moves from one statement to another, makes decisions, or repeats certain operations based on specific conditions or loops.
   - Decision Making: Control flow allows a program to choose different paths of execution based on conditions, which is fundamental for creating dynamic and responsive programs.
   - Repeating Operations: With Loops, control flow enables the repetition of tasks without writing redundant code, making programs more efficient and concise.
   - Order of Execution: It determines the sequence in which the code is executed, which is crucial for the logical flow and correctness of the program.
   - Conditional Statements will execute different code based on certain conditions. These are crucial for adding decision-making capabilities to your code.
   - In Ruby, conditional statements are created using the if, if/else, if/elsif/else, and case statements.

 # If Statements:
   - The if statement is the most basic form of conditional execution. It runs the code block only if the condition is true.
     * if condition
         [code to execute if condition is true]
       end
     * temperature = 30
       if temperature > 25
         puts "It's a hot day!"
       end 

 # If/else Statement:
   - The if/else statement allows you to execute different code blocks based on a condition. If the condition is true, the if block is executed. Otherwise, the else block is executed.
     * if condition
         [code to execute if condition is true]
       else
         [code to execute if condition is false]
       end
     * temperature = 30
       if temperature > 25
         puts "It's a hot day!"
       else
         puts "It's not a hot day."
       end 

 # Elsif Statement:
   - The elsif statement allows you to check multiple conditions. It is used in conjunction with the if statement and must come back before the else block.  
     * if condition1
         [code to execute if condition1 is true]
       elsif condition2
         [code to execute if condition2 is true]
       else
         [code to execute if both conditions are false]
       end 
     * temperature = 30
       if temperature > 25
         puts "It's a hot day!"
       elsif temperature < 10
         puts "It's a cold day!"
       else
         puts "It's not a hot day."
       end 
      
 # Unless Statement:
   - The unless statement is the opposite of the if statement. It executes the code block only if the condition is false.
     * unless condition
         [code to execute if condition is false]
       end
       age = 18
       unless age < 18
         puts "You can vote!"
       end\

 # Case Statement:
   - The case statement is used to compare a value against multiple conditions. It is similar to the if/elsif/else statement, but it is more concise and easier to read. 
     * case value
       when condition1
         [code to execute if condition1 is true]
       when condition2
         [code to execute if condition2 is true]
       else
         [code to execute if none of the conditions are true]
       end
     * age = 18
       case age
       when 0..12
         puts "You're a child."
       when 13..18
         puts "You're a teenager."
       else
         puts "You're an adult."
       end 
   - The '0..12' and '13..18' are ranges. They are used to check if a value falls within a certain range.

 # Loops:
   - Loops are a fundamental aspect of programming in Ruby that allows for the repetition of a block of code.
   - They are crucial for automating repetitive tasks and processing collections of data.
   - In Ruby, there are several types of loops including while, until, for, and each.

 # While Loop:
   - Repeats a block of code as long as a specified condition is true.
     * while condition
         [code to execute]
       end
   - The 'while' keyword is followed by a condition. The code block is executed repeatedly as long as the condition is true.
   - The condition is evaluated before each iteration, and if it is false, the loop is terminated.
   - The 'end' keyword marks the end of the loop or block.
     * i = 0
       while i < 5
         puts i
         i += 1
       end
       --> Output: 0 1 2 3 4

 # Until Loop:
   - Repeats a block of code as long as a specified condition is false.
     * until condition
         [code to execute]
       end
     * i = 0
       until i >= 5
         puts i
         i += 1
       end
       --> Output: 0 1 2 3 4 

 # For Loop:
   - Repeats a block of code for a specified number of times.
     * for variable in range
         [code to execute]
       end
     * for i in 0..4
         puts i
       end
       --> Output: 0 1 2 3 4  

 # Each Loop:
   - Repeats a block of code for each element in a collection.
     * collection.each do |variable|
         [code to execute]
       end
     * [1, 2, 3, 4, 5].each do |i|
         puts i
       end
       --> Output: 1 2 3 4 5

 # Loop Control Statements:
   - Loop control statements are used to alter the flow of a loop.
   - They allow you to break out of a loop, skip an iteration, or execute a loop forever.

 # Break Statement:
   - Terminates the loop and exits the block
     * while condition
      [code to execute]
      break
     end
     * i = 0
     while i < 5
       puts i
       break if i == 2
       i += 1
     end
     --> Output: 0 1 2 

 # Next Statement:
   - Skips the rest of the current iteration and continues with the next iteration.
     * while condition
        [code to execute]
        next
      end
     * i = 0
      while i < 5
        i += 1
        next if i == 2
        puts i
      end
      --> Output: 1 3 4 5 

 # Built in Methods in Ruby:
   - puts and print are two of the most commonly used methods in Ruby.
   - They are used to print data to the terminal
     * puts "Hello, world!"
       print "Hello, world!" 
   - There are methods that exist on data types like strings and numbers.
   - Ex: the length method returns the length of a string.
     * "Hello, world!".length --> 13

 # Common String Methods:
   - length: returns the length of the string.
     * "Hello, world!".length  --> 13
   - strip: returns a copy of the string with the leading and trailing whitespace removed.
     * " Hello, world! ".strip  --> "Hello, world!"
   - split: splits the string into an array of substrings based on the delimiter, such as a space or comma.
     * "Hello, world!".split(",")  --> ["Hello", " world!"]
   - start_with?: checks if the string starts with a specified substring.
     * "Hello, world!".start_with?("Hello")  --> true
   - end_with?: checks if the string ends with a specified substring.
     * "Hello, world!".end_with?("world!")  --> true
   - include?: checks if the string contains a specified substring.
     * "Hello, world!".include?("world")  --> true
   - upcase: returns a copy of the string with all lowercase letters replaced with uppercase letters.
     * "Hello, world!".upcase  --> "HELLO, WORLD!"
   - downcase: returns a copy of the string with all uppercase letters replaced with lowercase letters.
     * "Hello, world!".downcase  --> "hello, world!"
   - capitalize:   returns a copy of the string with the first character converted to uppercase and the remainder to lowercase.
     * "hello, world!".capitalize  --> "Hello, world!"
   - gsub: returns a copy of the string with all occurrences of a pattern replaced with another string.
     * "Hello, world!".gsub("world", "Ruby")  --> "Hello, Ruby!"
   - to_i: converts the string to an integer.
     * "10".to_i  --> 10
   - to_f : converts the string to a floating-point number.
     * "10.5".to_f  --> 10.5

 # Common Number Methods:
   - ( + ): Addition
     * 10 + 5  --> 15
   - ( - ): Subtraction
     * 10 - 5  --> 5
   - ( * ): Multiplication
     * 10 * 5  --> 50 
   - ( / ): Division
     * 10 / 5  --> 2 
   - ( % ): Modulus
     * 10 % 5  --> 0 
   - ( ** ): Exponentiation
     * 10 ** 5  --> 100000 
   - abs: returns the absolute value of a number.
     * -10.abs  --> 10
   - round: rounds a float to the nearest integer.
     * 10.5.round  --> 11 
   - floor: returns the largest integer less than or equal to a number.
     * 10.5.floor  --> 10 
   - ceil: returns the smallest integer greater than or equal to a number.
     * 10.5.ceil  --> 11 

 # Array Methods:
   - length: returns the length of the array.
     * [1, 2, 3, 4, 5].length  --> 5
   - push: adds an element to the end of the array.
     * [1, 2, 3, 4, 5].push(6)  --> [1, 2, 3, 4, 5, 6]
   - pop: removes the last element from the array
     * [1, 2, 3, 4, 5].pop  --> [1, 2, 3, 4]
   - first: returns the first element of the array
     * [1, 2, 3, 4, 5].first  --> 1 
   - last: returns the last element of the array
     * [1, 2, 3, 4, 5].last  --> 5 
   - join: joins all elements of the array into a string
     * [1, 2, 3, 4, 5].join  --> "12345" 
   - index: returns the index of the first element equal to the specified value.
     * [1, 2, 3, 4, 5].index(3)  --> 2
   - reverse: returns a new array with the elements in reverse order.
     * [1, 2, 3, 4, 5].reverse  --> [5, 4, 3, 2, 1]
   - sort: returns a new array with the elements sorted.
     * [5, 3, 1, 2, 4].sort  --> [1, 2, 3, 4, 5] 
   - include?: checks if the array contains a specified element.
     * [1, 2, 3, 4, 5].include?(3)  --> true 

 # Array Methods with Blocks:
  - Blocks are fundamental to Ruby, allowing for the creation of higher-order functions.
  - They are used to group statements together and pass them to methods as arguments.
  - Blocks are enclosed in curly braces or do/end keywords.
    * [1, 2, 3, 4, 5].each do |i|
        puts i
      end
      --> Output: 1 2 3 4 5 

 # Hash Methods:
   - length: returns the number of key-value pairs in the hash.
    * { "name" => "Alice", "age" => 30 }.length  --> 2
   - has_key?: checks if the hash contains a specified key.
     * { "name" => "Alice", "age" => 30 }.has_key?("name")  --> true
   - has_value?: Checks if the hash has a specified value.
     * { "name" => "Alice", "age" => 30 }.has_value?(30)  --> true
   - keys: returns a new array with all the keys of the hash.
     * { "name" => "Alice", "age" => 30 }.keys  --> ["name", "age"]
   - values: returns a new array with all the values of the hash.
     * { "name" => "Alice", "age" => 30 }.values  --> ["Alice", 30]
   - empty?: checks if the hash is empty.
     * { "name" => "Alice", "age" => 30 }.empty?  --> false

 # Basic Methods:
   - Methods allow for the encapsulation of logic and the creation of reusable code.
   - They are used to group statements together and give them a name. This allows for them to be called multiple times throughout a program.

 # What are methods?:
   - Methods are a set of instructions that can be called on an object.

 # Why use methods?:
   - Reusability: Methods allow you to reuse code without having to write it again. This makes your code concise and easier to maintain.
   - Abstraction: Methods allow you to abstract away complex logic and give it a name. This makes your code easier to understand and reason about.
   - Organization: Methods allow you to organized your code into logical blocks. This makes your code easier to navigate and maintain.
   - Readability: Methods allow you to give meaningful names to blocks of code. This makes you code easier to rea d and understand.
   
 # Example Method:
   - def say_hello
      puts "Hello, world!"
     end
   - The def keyword is used to define a method.    
   - The method name is say_hello
   - The code block is the code between the def and end keywords.
   - The code block is executed when the method say_hello is called.

 # Calling Methods:
   - Methods are called using the method name followed by parentheses.
   - If the method takes arguments, they are passed inside the parentheses.

 # Arguments:
   - Arguments are values that are passed to a method when it is called.
   - They are used to provide data to the method so that it can perform its task.
   - Methods can take zero or more arguments.
     * def say_hello(name)
         puts "Hello, #{name}!"
       end
   - The name is a parameter of the say_hello method.
   - It is a placeholder for the value that will be passed to the method when it is called.
   - The value that is passed to the method is called an argument.
     * say_hello("Alice") --> Hello, Alice!

 # Return Values:
   - Methods can return values to the caller using the return keyword. 
   - The return value is the result of the method's execution.
   - If the return keyword is not used, the method will return the last evaluated expression.
     * def add(a, b)
        return a + b
       end  
   - The add method takes two arguments and returns their sum.
   - The return keyword is used to return the result of the addition.
   - The return value of the method is the sum of the two arguments.
     * add(1, 2) --> 3

 # Testing with RSpec:
   - Testing is a crucial aspect of software development that ensures your code works as expected.
   - RSpec is a popular testing tool for Ruby, known for its human-readable syntax.
   - It allows you to write tests that are easy to understand and maintain.

 # Setting up RSpec:
   - You can install RSpec by adding the following to your Gemfile:
      # frozen_string_literal: true
      source "https://rubygems.org"
      git_source(:github) {|repo_name| "https://github.com/#{repo_name}" }
      # gem "rails"
      gem 'rspec'
   - In your bottom left hand side there a wide variety of Tools you can use. Click shell then run the following commands.
       gem install rspec - installs rspec
       bundle install - installs all the gems in your Gemfile
       rspec --init - creates the necessary configuration files, including spec_helper.rb and a .rspec file in your project directory. This command creates the necessary configuration files,including spec_helper.rb and a .rspec file in your project directory.
     * Test files in RSpec are typically placed in the spec directory and end with _spec.rb. Create this directory if it doesn't exist, and start adding your test files there.

 # Writing a Simple Test:
   - Suppose we want to test a simple method in math_operations.rb

*//--------------Example: math_operations.rb------------//*

def add
end

*//-----------------------------------------------------//*

   - To test the method we would create a corresponding Rspec test file.
   - To create the test file, create a file named [file_name.spec.rb] inside a spec folder
     * For our example it is math_operations.spec.rb 

*//--------------Example: math_operations.spec.rb------------//*

require_relative '../math_operations'           |   -->   Directing to the file that the spec file is going to test.
describe 'math_operations' do                   |   -->   Organizing the test to check the corresponding file.
  describe'#add' do                             |   -->   Organizing the test to check the add method.
    it 'correctly adds two numbers' do          |   -->   Testing that the add method executes the correct behavior.
      expect(add(2, 3)).to eq(5)                |   -->   Instantiating the expected results of the add method.
    end
  end
end

*//----------------------------------------------------------//*

   - "describe" blocks are used to organize the tests. They can represent methods or behaviors.
   - "it" blocks contain the individual tests. Each "it" block should test one aspect of the behavior.
   - "expect(...).to eq(...) syntax is used to assert expected outcomes.
   - Upon running the test for math_operations.rb, you will get a failing tests because the add method is not implemented yet. You can implement the method and run the tests again to see if they pass.

*//--------------Example: math_operations.spec.rb------------//*

F

Failures:

  1) math_operations #add correctly adds two numbers
     Failure/Error: expect(add(2, 3)).to eq(5)

     ArgumentError:
       wrong number of arguments (given 2, expected 0)
     # ./math_operations.rb:1:in `add&#39;
     # ./spec/math_operations_spec.rb:5:in `block (3 levels) in &lt;top (required)&gt;&#39;

Finished in 0.06202 seconds (files took 0.5056 seconds to load)
1 example, 1 failure

Failed examples:

rspec ./spec/math_operations_spec.rb:4 # math_operations #add correctly adds two numbers

*//----------------------------------------------------------//*

   - This means that the add method is not implemented correctly since it's expecting two arguments and is currently receiving none.
   - This is fixed by implementing the method correctly.

*//--------------Example: math_operations.rb------------//*

def add (a, b)
end

*//-----------------------------------------------------//*

   - Running the test again yields another failure.

*//--------------Example: math_operations.spec.rb------------//*

F

Failures:

  1) math_operations #add correctly adds two numbers
     Failure/Error: expect(add(2, 3)).to eq(5)

       expected: 5
            got: nil

       (compared using ==)
     # ./spec/math_operations_spec.rb:5:in `block (3 levels) in &lt;top (required)&gt;&#39;

Finished in 0.09761 seconds (files took 0.57531 seconds to load)
1 example, 1 failure

Failed examples:

rspec ./spec/math_operations_spec.rb:4 # math_operations #add correctly adds two numbers

*//----------------------------------------------------------//*

   - This means that the add method is not returning the correct value.
   - This is fixed by implementing the method correctly.

*//--------------Example: math_operations.rb------------//*

def add (a, b)
  a + b
end

*//-----------------------------------------------------//*

   - Running the tests again will result in a pass.

*//--------------Example: math_operations.spec.rb------------//*
Finished in 0.00929 seconds (files took 0.35119 seconds to load)
1 example, 0 failures
*//----------------------------------------------------------//*