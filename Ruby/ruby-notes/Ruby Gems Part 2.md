*//------------------------------------------------------------RUBY GEMS: USER AUTH AND DATA MANIPULATION------------------------------------------------------------//*

 # Bcrypt and Passwords:
   - Authentication:        A common feature in applications that is the process of verifying a user is who they say they are. Usually done by asking for the user for a username and  
                            password.
   - The username and password are input by the user and are then compared to the username and password stored in the database.
   - If the username and password match, the user is authenticated, otherwise the user will not be authenticated.
   - An important aspect of user authentication is the encryption of passwords, and we will use the Bcrypt gem to encrypt ours.

 # Bcrypt:
   - Bcrypt:        A one-way hashing algorithm that is used to encrypt passwords.
     * One-way Encryption:          Once encrypted, it cannot be decrypted. The only way to decrypt a password is to try a password and see if it matches the encrypted password.
   - To set up user authentication in ruby, you will need a file with the Bcrypt gem installed.   
   - Just like all other gems, add "bcrypt" to your gemfile and run bundle install.

*//------------------------------Example: Password Encryption------------------------------//*
require "bycrypt"

my_password = BCrypt::Password.create("my password")

puts my_password  -->  $2a$12$170PTjKUJSIY0g16MEB9s.xYMc6vknwpFcLGwlemWzlkBFYpR7aZe
*//----------------------------------------------------------------------------------------//*

   - The BCrypt gem provides a "BCrypt::Password" class that we can use to create a new password.
   - The "BCrypt::Password.create" method takes a string as an argument and returns a new password object.
   - The password has a "to_s" method that returns the encrypted password as a string.
   - The output is an encrypted password that starts with "$2a$12$". The "$2a$12$" is called the salt.
   - The Salt:      Used to make the encrypted password more secure. It is generated randomly and is different every time you run the BCrypt::Password.create method and is stored with 
                    the encrypted password so that the password can also be verified later.
   - The encrypted password can be verified using "==" method.
     * == method takes a string as an argument and returns true if the string matches the encrypted password and false if it does not. 

*//------------------------------Example: Password Encryption------------------------------//*
require "bycrypt"

my_password = BCrypt::Password.create("my password")

puts my_password == "my password"       -->         True

puts my_password == "not my password"   -->         False
*//----------------------------------------------------------------------------------------//*

   - The "==" method is useful for verifying passwords.
   - If you have a user model with a password attribute, you can use the "==" method to verify that the user's password matches the encrypted password stored in the database.

*//------------------------------Example: Password Encryption with User------------------------------//*
require "bcrypt"

class User
    attr_accessor :username, :password

    @@users = []
    def initialize(username, password)
        @username = username
        @password = BCrypt::Password.create("password")
        @@users << self
    end

    def self.authenticate(username, password)
        user = User.find_by_username(username)

        if user && user.password == password
            return user
        else
            return nil
        end
    end

    def self.all
        @@users
    end

    def self.find_by_username(username)
        user = all.find do |user|
            user.username == username
        end
        user
    end
end

User.new("username", "password")
user = User.find_by_username("username")             -->             Returns user object.
puts User.authenticate("username", "password")       -->             Returns user object.
puts User.authenticate("username", "not password")   -->             Returns nil.
*//----------------------------------------------------------------------------------------//*

   - The "User.authenticate" method takes a username and password as arguments and returns a user object if the username and password match a user in the database.
   - The "User.authenticate" method uses the "==" method to verify that the password matches the encrypted password that is stored in the class.

 # Incorporating BCrypt into Countries of the World CLI:
   - Let's incorporate user auth into the Countries of the World CLI
   - Add "bcrypt" to the gemfile and bundle install.
   - Add a user.rb file.

*//--------------------------------------Countries of the World CLI: lib/cli.rb--------------------------------------//*
require_relative "scraper.rb"
require_relative "user.rb"

class CLI
  def start
    Scraper.scrape_countries
    puts "Welcome to the Countries of the World CLI!"
    authenticate
    puts "Please enter a country name to get more information about it."
      input = gets.strip
      country = Country.all.find { |country| country.name.downcase == input.downcase }
      if country === nil
        puts "Sorry, that country is not in our database. Please try again."
      else
      puts "Name: #{country.name}"
      puts "Capital: #{country.capital}"
      puts "Population: #{country.population}"
      puts "Area: #{country.area}"
    end
  end

  def get_input
    gets.strip
  end

  def authenticate
    authenticated = false

    until authenticated
      puts 'Please login or sign up.'
      puts "Which do you choose? (login / sign up)"

      if get_input == 'login'
        authenticated = login
      else
        create_account
      end
    end
  end

  def login
    puts "Please enter your username:"
    username = gets.chomp
    puts "Please enter your password:"
    password = gets.chomp
    result = User.authenticate(username, password)

    if result
      puts "Welcome back #{username}!"
    else
      puts "Sorry, that username and password combination is not recognized. Please try again."
    end
    result
  end

  def create_account
    puts "Please enter a username:"
    username = gets.chomp

    puts "Please enter a password:"
    password = gets.chomp

    User.new(username, password)
    puts "Account created"
  end
end
*//------------------------------------------------------------------------------------------------------------------//*

   - As seen above, we changed a couple things with the "start" method
     * We will add a call to the authenticate method before the user can search for a country. If the user is not able to be authenticated, we will not allow them to search for a country
     * We will add a call to the create_account method if the user chooses to sign up.

 # File and Data Manipulation:
   - File and Data Manipulation means to change the contents of a file or data, and is very common in programming.
   - In special cases, you may have to monitor outputs of responses and bundle them into a file.
   - Other times you may need to extract a csv file from a database and convert it into a json file.
   - We will use the Countries of the World CLI to give an example on how to add data to a file and manipulate that data.
     * First, we will add usernames and their encrypted hashes into an external JSON file.
         + JSON files are files that stores data in a key-value pair format.

*//----------Example JSON File----------//*
{
	"name": "John",
	"age": 30,
	"cars": [
		{
			"name": "Ford",
			"models": ["Fiesta", "Focus", "Mustang"]
		},
		{
			"name": "BMW",
			"models": ["320", "X3", "X5"]
		},
		{
			"name": "Fiat",
			"models": ["500", "Panda"]
		}
	]
}
*//-------------------------------------//*

   - Realistically, we would be using a database to store information, but for now we will use a JSON file.
   - For the Countries of the World CLI, in user.rb, we will define a method that stores the user information in an external file.
     * Ensure to require 'json' in your file so you can suse the JSON class.

 *//--------------------------------------Countries of the World CLI: lib/user.rb--------------------------------------//*
  require 'json'
  .
  .
  .
    def store_credentials(user)
      file_path = 'users.json'

    unless File.exist?(file_path)
      File.open(file_path, 'w') { |file| file.write(JSON.generate([])) }
    end
  end
 *//-------------------------------------------------------------------------------------------------------------------//*

   - The "File" class is a class that is used to read and write files.
   - The "File_exist?" method takes a file path as an argument and returns true if the file exists and false if it does not.
   - The "File.open" method takes a file path and a block as arguments and opens the file for reading and writing.
   - The "JSON.generate" method takes an array as an argument and returns a JSON string.
     * This will create a JSON file with an empty array if the file does not already exist.
 
  *//--------------------------------------Countries of the World CLI: lib/user.rb--------------------------------------//*
  require 'json'
  .
  .
  .
    def store_credentials(user)
      file_path = 'users.json'

    unless File.exist?(file_path)
      File.open(file_path, 'w') { |file| file.write(JSON.generate([])) }
    end

    file = File.read(file_path)
    users_data = JSON.parse(file)

    users_data << { 'username' => user.username, 'password', => user.password }

    File.open(file_path, 'w') { |file| file.write(JSON.generate(users_data)) }
  end
 *//-------------------------------------------------------------------------------------------------------------------//*

   - We then will call store_credentials as the user is initialized.

  *//--------------------------------------Countries of the World CLI: lib/user.rb--------------------------------------//*
  require 'json'

class User
  attr_accessor :username, :password

  @@users = []

  def initialize(username, password)
    @username = username
    @password = BCrypt::Password.create(password)
    store_credentials(self)
    @@users << self
  end
 *//-------------------------------------------------------------------------------------------------------------------//*

   - Once we check to see if the file exists, we will read the file and parse the JSON string into an array.
   - We will then add the user's username and password to the array and write the array back to the file.
   - Now you can sign up and add the credentials to the users.json.
   - However, we encounter a new issue with signing up.
     * Every time we load the file and initialize new user instances, we are creating a NEW password each and every time. We need to change our logic.  

*//--------------------------------------Countries of the World CLI: lib/user.rb--------------------------------------//*
  def initialize(username, password, password_pre_hashed = false)
    @username = username
    @password = password_pre_hashed ? BCrypt::Password.new(password) : BCrypt::Password.create(password)
    @@users << self
  end
 *//-------------------------------------------------------------------------------------------------------------------//*

   - Here, we use the ternary operator to check if the password is pre-hashed. If it is, we will use BCrypt::Password.new method to create a new password object from the pre-hashed password.
     * This method is used to create a password object from a pre-hashed password
   - You aren't able to verify a password using the "==" method if the password is pre=hashed. 
     * It is important to note that the BCrypt::password.new method takes a string as an argument and returns a password object. 
     * This is how bcrypt knows that the password is pre-hashed and to verify the password.
   - If it is not, we will use the BCrypt::Password.create method to create a new password object from the password.
   - Taking a look at our "load_users_from_file" method, we include true for the new argument since loading users will have an existing password pre-hash.

*//--------------------------------------Countries of the World CLI: lib/user.rb--------------------------------------//*
def self.load_users_from_file
    file_path = 'users.json'            # Path to your JSON file

    if File.exist?(file_path)
      file = File.read(file_path)
      users_data = JSON.parse(file)

      users_data.each do |user_data|
        User.new(user_data['username'], user_data['password'], true) # true indicates that the password is already hashed     #true indicates that the password is already hashed.
      end
    end
  end
*//-------------------------------------------------------------------------------------------------------------------//*

   - Since we store credentials in the CLI class, we will turn it from an instance method into a class method

  *//--------------------------------------Countries of the World CLI: lib/user.rb--------------------------------------//*
  require 'json'
  .
  .
  .
  def self.store_credentials(user)
    file_path = 'users.json'

    unless File.exist?(file_path)
      File.open(file_path, 'w') { |file| file.write(JSON.generate([])) }
    end

    file = File.read(file_path)
    users_data = JSON.parse(file)

    users_data << { 'username' => user.username, 'password' => user.password }

    File.open(file_path, 'w') { |file| file.write(JSON.generate(users_data)) }
  end
 *//-------------------------------------------------------------------------------------------------------------------//*

   - Now, let's navigate back to the CLI and include the newly added argument for when a user creates an account.

*//--------------------------------------Countries of the World CLI: lib/cli.rb--------------------------------------//*
def create_account
    puts 'Please enter a username:'
    username = gets.chomp

    puts 'Please enter a password:'
    password = gets.chomp

    user = User.new(username, password, false)    # false indicates that the password is not hashed
    User.store_credentials(user) 
    puts 'Account created'
  end
*//------------------------------------------------------------------------------------------------------------------//*

   - Now, load the users from file at the start.

*//--------------------------------------Countries of the World CLI: lib/cli.rb--------------------------------------//*
class CLI
  def start
    User.load_users_from_file
    Scraper.scrape_countries
*//------------------------------------------------------------------------------------------------------------------//*