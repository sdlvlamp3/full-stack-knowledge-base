*//------------------------------------------------------------INTRO TO RUBY PART 2: OBJECT ORIENTED PROGRAMMING------------------------------------------------------------//*

 # Object Oriented Programming:
   - A programming paradigm that uses objects and classes.
   - It is based on the concept of objects.
   - Objects contain data in the form of fields and code in the form of procedures.

 # Classes and Objects
   - Classes: Blueprints for creating objects that define the properties / behaviors of an object.
   - Object: Instance of a class that is a concrete entity based on a class
   - The purpose of a class is to group methods and variables into a single unit that can be used more easily.
   - Classes are like factories that produce objects.
   - The objects that are created are called instances of that class.
   - This is practical because it allows us to create many objects of the same type without have to write the same code repeatedly.

 # Book Program:
   - Let's say we want to create a program that manages books. We will need a book class that defines what a book is and what can be done to a book.
   - Then, we create many instances of the book class to represent the books in our program.
   - Each instance of the Book class will have its own properties and behaviors.
     * Ex: Each book will have its own title, author, and number of pages. 

 # Creating a Ruby Class:
   - To define a class, we use the class keyword followed by the name of the class.
     * [class] [name]
   - Class names are written in PascalCase (the first letter of each word in the name is capitalized)
     * For the book program we will need the book class.

*//-------Example: Book-----//*
    class Book      | --> Class Name
*//--------------------------------//*


 # Class Methods in Ruby:
   - To define a method in Ruby, we use the "def" keyword followed by the name of the method.
   - The name of each method is written in snake_case (each word in the name is separated by an underscore)
   - Class Methods are also called Instance Methods because they are defined in the class and can be called on instances of the class.

*//-------Example: Book-----//*
    class Book                  | --> Class Name

        def print_title         |
            puts @title         |
        end                     |
        def print_author        |
            puts @author        | --> Methods
        end                     |
        def print_pages         |
            puts @pages         |
        end                     | 
    end    
*//--------------------------------//*

 # Initialize Instance Variables:
   - Instance Variables are variables that are defined in a class and can be accessed by all the instance methods in the class.
     * Instance variables are defined by using the "@" symbol.
   - The Initialize Method is a special method that is called when an instance of a class is created.
     * It is used to initialize the instance variables of the class.
     * It is also called the constructor method because it is used to construct / create an instance of a class.
     * We can pass arguments into the initialize method when we create an instance of a class.
     * These arguments are passed to the initialize method and used to initialize the instance variables of the class. 

*//-------Example: Book-----//*
    class Book                                          | --> Class Name
        
        def initialize(title, author, pages)            | --> Initialize Method

            @title = title                              |
            @author = author                            | --> Instance Variables
            @pages = pages                              |
        end                                             |

        def print_title                                 |
            puts @title                                 |
        end                                             |
        def print_author                                |
            puts @author                                | --> Methods
        end                                             |
        def print_pages                                 |
            puts @pages                                 |
        end                                             | 
    end    
*//--------------------------------//*

 # Creating a Ruby Object:
   - To create an object in Ruby we use the "new" method.
   - This method creates a new instance of the class that it is called on.
     * [object] = [[ClassName].new]
     * For the book program we will need book objects

*//-------Example: Book-----//*
    book = Book.new
*//--------------------------------//*

   - Now that we have the book object, we can create an instance of the Book class and call the instance methods on it:

*//-------Example: Book-----//*
    book = Book.new("The Pragmatic Programmer", "Andy Hunt and Dave Thomas", 352)

    book.print_title    --> The Pragmatic Programmer

    book.print_author   --> Andy Hunt and Dave Thomas

    book.print_pages    --> 352
*//--------------------------------//* 

 # Inheritance:
   - Inheritance is a mechanism that allows us to define a class based on another class.
   - It allows us to create a class that is a specialization of another class.
   - The class that IS INHERITED from is called the superclass / parent class.
   - The class that INHERITS from the superclass is called the subclass / child class.
   - Inheritance becomes useful when we want to reuse code.
     * It allows us to define a class that inherits from another class and add new properties and behaviors to it
     * It prevents us from having to repeatedly write the same code. 

*//-------Example: Book-----//*
    class Item
        
        def initialize(name, price)
            @name = name
            @price = price

        end

        def print_name
            puts @name
        end
        def print_price
            puts @price
        end
    end

    class Book < Item
        def initialize(name, price, author, pages)
            super(name, price)
            @author = author
            @pages = pages
        end

        def print_author
            puts @author
        end

        def print_pages
            puts @pages
        end
    end    
*//-----------------------------//*

   - Above, you can see that the Book class inherits from the item class.
     * This means that the Book class inherits all the properties and behaviors of the item class
     * This is useful because it allows us to avoid writing the same code repeatedly.
   - The "super" keyword is used to call the superclass's method with the same name as the method that is being called.
     * This is useful because it allows us to call  the superclass's method with the same name as the method that is being called.
   - Now, you can create an instance of the Book class and call the instance methods on it.

*//-------Example: Book-----//*
book = Book.new("The Pragmatic Programmer", 29.95, "Andy Hunt and Dave Thomas", 352)

book.print_name    --> The Pragmatic Programmer

book.print_price   --> 29.95

book.print_author  --> Andy Hunt and Dave Thomas

book.print_pages   --> 352
*//-------------------------//*  

 # Polymorphism:
   - Polymorphism is the ability for an object to take on many forms. This means an object can respond to the same method in different ways.
   - Below is an example of Polymorphism

*//-----Example: Animal-----//*
class Animal
    def speak
        puts "I am an animal"
    end
end
class Dog < Animal
    def speak
        puts "I am a dog"
    end
end

class cat < Animal
    def speak
        puts "I am a cat"
    end
end

def speak(animal)
    animal.speak
end

animal = Animal.new

speak(animal)   -->     I am an animal

dog = Dog.new

speak(dog)      -->     I am a dog

cat = Cat.new

speak(cat)      -->     I am a cat
*//-------------------------//*

 # Polymorphism cont.
   - The Animal class and the Dog class both have a speak method.
     * This means both of them respond to the same method in a different way.
   - This is useful because it allows us to write code that works with different types of objects.
   - In a practical sense, this means that we can write code that works with different types of objects.
     * For instance, we can write a code that works with different types of animals.

 # Encapsulation:
   - Encapsulation is the process of hiding the internal details of an object. 
   - We do this so that the object can only be accessed through a well-defined interface.
   - Below is an example of encapsulation

*//-------Example: Book-----//*
class Book
    def initialize(title, author, pages)
        @title = title
        @author = author
        @pages = pages     
    end

    def print_title
        puts @title
    end

    def print_author
        puts @author
    end

    def print_pages
        puts @pages
    end
end                     | --> The end of the Book class means that methods and variables outside of the "end" can not access the methods and variables inside the Book class.

book = Book.new("The Pragmatic Programmer", "Andy Hunt and Dave Thomas", 352)

book.print_title     -->     The Pragmatic Programmer

book.print_author    -->     Andy Hunt and Dave Thomas

book.print_pages     -->     352

*//--------------------------//*

 # Encapsulation cont:
   - Above, you can see that the Book class has three instances of variables: @title, @author and @pages.
   - These instance variables are private, meaning that they can only be accessed by the instance methods in the class.
   - This is useful because it allows us to hide the internal details of an object so that we can change the internal details of an object without affecting the code that uses that object.

 # Access Modifiers:
   - Access modifiers are keywords that are used to control the visibility of methods and variables.
   - There are three access modifiers in Ruby:
     * Public:      Methods and variables can be accessed by anyone. Public methods have no Access Modifier keyword.
     * Protected:   Methods and variables can only be accessed by the class that defines them and its subclasses.
     * Private:     Methods and variables can only be accessed by the class that defines them. Private methods are indicated through the "private" keyword.
   - Below is an example of access modifiers through public and private methods.

*//-------Example: Book-----//*
class Book
    def initialize(title, author, pages)
        @title = title
        @author = author
        @pages = pages     
    end

    def print_title
        puts @title
    end

    def print_author
        puts @author
    end

    def print_pages
        puts @pages
    end

    def print_details
        puts @title
        puts @author
        puts @pages
    end

    private
        def print_details_private
            puts @title
            puts @author
            puts @pages
        end
end

book = Book.new("The Pragmatic Programmer", "Andy Hunt and Dave Thomas", 352)

book.print_title     -->     The Pragmatic Programmer

book.print_author    -->     Andy Hunt and Dave Thomas

book.print_pages     -->     352

book.print_details   -->    The Pragmatic Programmer
                            Andy Hunt and Dave Thomas
                            352

book.print_details_private      -->     NoMethodError: private method `print_details_private` called for #<Book:0x00007f8b9a8b6a10>
*//--------------------------//*

 # Access Modifiers cont:
   - Above, you can see that the print_details method is public. This means that it can be accessed by anyone
   - The print_details_private method is private so that it can only be accessed by the class that defines it.
   - Below is an example of private methods through inheritance.

*//-----Example: Animal-----//*
class Animal
    def initialize(name)
        @name = name
    end

    def print_details
        puts @name
    end
    
    private

    def print_details_private
        puts @name
    end
end

class Dog < Animal
end

animal = Animal.new("animal")

animal.print_details    -->     animal

animal.print_details_private # => NoMethodError: private method `print_details_private' called for #<Animal:0x00007f8b9a8b6a10>

dog = Dog.new("dog")

dot.print_details       -->     dog

dog.print_details_private # => NoMethodError: private method `print_details_private' called for #<Dog:0x00007f8b9a8b6a10>
*//-------------------------//*

 # Getters and Setters:
   - Getters and Setters are methods that are used to get and set the value of a instance variables.

*//-------Example: Book-----//*
class Book
  def initialize(title, author, pages)
    @title = title
    @author = author
    @pages = pages
  end

  def title                         |
    @title                          |  -->  Getter: Methods that help you retrieve the value of an instance variable.
  end                               |

  def title=(title)                 |
     @title = title                 |  -->  Setter: Methods that help you assign new values to instance variables.
  end                               |               

  def author
    @author
  end

  def author=(author)
    @author = author
  end

  def pages
    @pages
  end

  def pages=(pages)
    @pages = pages
  end
end

book = Book.new("The Pragmatic Programmer", "Andy Hunt and Dave Thomas", 352)

puts book.title     -->      The Pragmatic Programmer

puts book.author    -->      Andy Hunt and Dave Thomas

puts book.pages     -->      352

book.title = "The Pragmatic Programmer 2"

puts book.title     -->      The Pragmatic Programmer 2
*//--------------------------//*

 # Accessing Modifiers With attr_accessor, attr_reader, and attr_writer:
   - The attr_accessor, attr_reader, and attr_writer are all used in creating getters and setters.
     * attr_accessor:   Creates the getter and setter methods for a desired variable.
     * attr_reader:     Creates only the READER for the variable. It can only read the variable, but can not change it.
     * attr_writer:     Creates only the WRITER for the variable. It can change the variable, but can not read it.
   - In most cases, we use the attr_accessor as it accomplishes both tasks at once.

*//-------Example: Book-----//*
class Book
  attr_accessor :title, :author, :pages

  def initialize(title, author, pages)
    @title = title
    @author = author
    @pages = pages
  end
end

book = Book.new("The Pragmatic Programmer", "Andy Hunt and Dave Thomas", 352)

puts book.title # => The Pragmatic Programmer

puts book.author # => Andy Hunt and Dave Thomas

puts book.pages # => 352

book.title = "The Pragmatic Programmer 2"

puts book.title # => The Pragmatic Programmer 2
*//--------------------------//*

 # Writing Tests in RSpec for Classes and Objects:
   - We are going to write tests for the Book class that has been used throughout this lesson.

*//-------Example: book.rb-----//*
class Book
  attr_accessor :title, :author, :pages

  def initialize(title, author, pages)
    @title = title
    @author = author
    @pages = pages
  end
end
*//----------------------------//*

   - Above, we can see that the book class has three instance variables: @title, @author, @pages

*//-------Example: book.spec.rb-----//*
require_relative '../book'

describe Book do
  describe '#title' do
    it 'returns the title of the book' do
      book = Book.new("The Pragmatic Programmer", "Andy Hunt and Dave Thomas", 352)

      expect(book.title).to eq("The Pragmatic Programmer")
    end
  end
end
*//--------------------------------//*

   - Above, we can see that we are using the rspec to write tests for the Book class.
   - The describe blocks are testing that the title variable will match the expected output.

 # Modules and Mixins:
   - Modules are used to group related methods, classes, and constants together. 
   - They are great for organizing code and making it more readable.
   - They are also great for sharing code between classes.

*//-------Example: Math Module-----//*
module Math
  def self.square(x)
    x * x
  end
end

puts Math.square(2) # => 4
*//--------------------------------//*

   - Above we can see that the math module has a square method.
   - This means that we can call the square method on the Math module.
   - The following is an example of a module that is INCLUDED in a class.

*//-------Example: Math Module INCLUDED-----//*
module Math
    def square(x)
        x * x
    end
end

class Book
  include Math      -->         Includes the square method in the book class.

  attr_accessor :title, :author, :pages

  def initialize(title, author, pages)
    @title = title
    @author = author
    @pages = pages
  end
end

book = Book.new("The Pragmatic Programmer", "Andy Hunt and Dave Thomas", 352)

puts book.title      -->     The Pragmatic Programmer

puts book.author     -->     Andy Hunt and Dave Thomas

puts book.pages      -->     352

puts book.square(2)  -->     4
*//----------------------------------------//*

  - Above you can see that the Math Module is included in the book class, so that means we can call the square method on the Book class.
  - Below is an example of a module that is EXTENDED in a class.

*//-------Example: Math Module EXTENDED-----//*
module Math
  def square(x)
    x * x
  end
end

class Book
  extend Math       -->         Extends the square method into the book class.

  attr_accessor :title, :author, :pages

  def initialize(title, author, pages)
    @title = title
    @author = author
    @pages = pages
  end
end

puts Book.square(2) # => 4
*//----------------------------------------//*

  - Above you can see that the math Module is extended into the book class, so that means we can call the square function on the book class.

 # Include v.s. Extend:
  - Including a module is used for adding methods only to an instance of a class.
  - Extending a module is used for adding methods to the class, but not its instance.

 # Classes v.s. Modules:
  - Classes are used when you want to create an object.
  - Modules are used when you want to group related methods, classes, and constants together
    * Mainly, you want to abstract logic into modules when you want to share them between classes.

 # Class Methods and Class Variables:
   - Class methods are methods that are defined in a class and can be called on the class itself.
   - Below is an example of a class method.

 *//-------Example: Book-----//*
 class Book
  @@count = 0

  def initialize(title, author, pages)
    @title = title
    @author = author
    @pages = pages

    @@count += 1
  end

  def self.count
    @@count
  end
end

book1 = Book.new("The Pragmatic Programmer", "Andy Hunt and Dave Thomas", 352)

book2 = Book.new("The Pragmatic Programmer 2", "Andy Hunt and Dave Thomas", 352)

puts Book.count # => 2
*//--------------------------//*

  - Above, we can see that the book class has a count method.
    * This means we can call the count method on the Book class.
    * This is useful because it allows us to get the number books that have been created.
  - The "@@" symbol is used to define class variables.
    * Class variables are variables that are defined in a class and can be accessed by all class methods in the class.

 # Self Keyword for Class and Instance Methods:
  -  The "self" keyword can be used in both class and instance methods.
  -  In class methods, self refers to the class itself.
  -  In instance methods, self refers to the instance of the class that the method is called on.
  -  Below is an example of the using of "self" in a class method.


*//-------Example: Self in Class Method-----//*
class User
    def self.say_hello
        puts "Hello"
    end
end

User.say_hello      -->     Hello
*//-----------------------------------------//*

  - Above, we can see that the "self" keyword is used to define a class method.
  - This means that we can call the say_hello method on the User class.
  - However, this method isn't very useful. Just an example of using self in a class method.

*//-------Example: Self in Instance Method-----//*
class User
    def initialize(name)
        @name = name
    end

    def say_hello
        puts "Hello, my name is #{self.name}"
    end

    def name
        @name
    end
end

User.new("Alice")

user.say_hello      -->     Hello, my name is Alice
*//--------------------------------------------//*

  - Above, you can see that the self keyword is used to define an instance method.
  - This means that we can call say_hello method on the User class.
  - This is useful because it allows us to access the instance variables of the class.