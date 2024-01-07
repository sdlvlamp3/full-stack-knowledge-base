*//------------------------------------------------------------DATA TYPES------------------------------------------------------------//*

 + What are data types?
   - A classification that dictates what sort of value a variable can hold and how the computer interprets that value.
     * Ex: Variables can hold a string of characters, a number, or a boolean.
   - The data type determines what operations can be performed on the data, and how the data is stored in memory.

 + Why are Data types important?
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

 + Common Data Types:
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

 + Ruby Primitive Data Types:
   - Primitive Data types are the basic types of data with which most languages start.
     * Ex: Integers, floats, booleans, characters.
   - Often directly supported by the underlying hardware and represent single values.

 + Strings in Ruby:
   - Strings are textual data.
   - Strings are typically enclosed in a single or double quotes.
     * "Hello World" / 'Hello World'
   - IN RUBY, whether you use single (' ') or double (" ") quotes can affect their behavior. Particularly in terms of escape sequences and string interpolation.
   - Single Quotes: Simpler and more literal. Best sued when you need a string exactly as it is without any additional processing.
     * puts 'Hello\nWorld' # Output: Hello\nWorld 
     * \n typically creates a new line, but because the string is in single quotes, it outputs the character as printed.
   - Double Quotes: More flexible and allow for escape sequences and string interpolation.
     * name = "Ruby"                                        #output: Hello, Ruby!
       puts "Hello #{name}!\nWelcome to programming!"                Welcome to programming!
   - Escape Sequences: special characters that are preceded by a backslash ( \ ) to denote a special meaning.
     - Ex: \n = newline character, \t = tab, \\ represents backslash

 + Numbers in Ruby:
   - IN RUBY, numbers mainly fall into two categories: integers or floating-point numbers.
   - Integers are whole numbers without a decimal point. They can be positive, negative, or zero. 
     * Ruby handles integers very efficiently and they can be used for counting, iterating, and various mathematical operations.
     * Ruby integers can be of any length, limited only by the memory of the machine.
   - Floating-point numbers, or floats, are numbers with a decimal point. They are used when more precision is required in scientific calculations or working with fractions.

 + Booleans in Ruby:
   - Booleans come in two flavors: true and false
     * true: This is a Ruby object that represents truth. It is an instance of the TrueClass
     * false: Represents falsehood and is an instance of the FalseClass
   - Ruby only has one strict rules about what is considered true or false. Unlike some languages, in Ruby, only false and nil (Ruby's way of saying nothing / no value) are treated as false 
     in conditional expressions. Every other value, including 0, "" (empty string), and [] (empty array), is considered true.

 + Complex Data Types:
   - More sophisticated and can represent a collection of more complex entities.
   - Arrays, lists, objects, and dictionaries are all examples of complex data types.
   - They are constructed using primitive data types and other complex data types.

 + Arrays in Ruby:
   - Versatile and essential data structures in Ruby, used to store collections of items. These items can be of any type, including numbers, strings, or even other arrays.
   - An array is an ORDERED list of elements. Each element in an array is associated with an index, which is a numerical representation of the item's position in the list.
   - Arrays can be created in several ways in Ruby:
     * Using [ ], the most common way to create an array.
       ~ numbers = [1, 2, 3, 4, 5]
       ~ words = ['hello', 'world']
       ~ mixed = [1, 'two', 3.0, [4, 'five']]
     * Using the Array.new Method: This method creates an array with specifies size and default value.
       ~ empty_array = Array.new(3) --> [nil, nil, nil]
       ~ zeros = Array.new(3, 0) --> [0, 0, 0]
   - To access an element in an array, you use their index. Ruby arrays are always zero-indexed, meaning the first element is always 0.
   - array = [10, 20, 30, 40, 50]
     * puts array[0]   # => 10
     * puts array[2]   # => 30
     * puts array[-1]  # => 50 (last element)
   - Elements can be added to an array using methods like push, << or insert
     * array = []
     * array.push(1)
     * array << 2
     * array.insert(1, 1.5)  # => [1, 1.5, 2] 

 + Hashes:
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
     * puts my_hash['name'] #    



          
