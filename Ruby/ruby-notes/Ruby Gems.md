*//------------------------------------------------------------RUBY GEMS------------------------------------------------------------//*

 # Ruby Gems:
   - Ruby gems are packages of code that you can use in Ruby projects.
   - You can find them on RubyGems.org
   - The purpose of gems is to make your life easier.
   - Instead of writing code from scratch, you can use a gem that someone else has already written.

 # Gem Examples:
   - Nokogiri:      A gem that allows you to parse HTML and XML docs.
   - Pry:           A gem that allows you to debug your code.
   - HTTParty:      A gem that allows you to make http requests.
   - Sinatra:       A gem that allows you to create web applications.
   - Rails:         A gem that allows you to create web applications.
   - Rake:          A gem that allows you to automate tasks.
   - RSpec:         A gem that allows you to test your code.
   - Rubocop:       A gem that allows you to check your code for style and syntax errors.
   - Faker:         A gem that allows you to generate fake data.

 # Using a Gem:
   - In order to incorporate gems into your project, you add code to your Gemfile.
   - The Gemfile is used to specify the gems that you want to use in your project.
   - To add Nokogiri, add the following to the gemfile:

*//-----Nokogiri Gemfile Example-----//*
source "https://rubygems.org"
ruby '3.1.2'
gem "nokogiri"
*//--------------------------//*

   - The "source" method is used to specify the source of the gems that we want to use. 
   - The "gem" method is used to specify the gem we want to use.
   - You can also specify the version of the gem you want to use.
   - After adding the gme to the Gemfile, run bundle install.
 
 # Bundle Install:
   - Bundle install is a command that will install all gems and their dependencies into your project.
   - Whenever you add a new gem to your Gemfile, you must run bunle install.
     * This is equivilant to bundle install in JavaScript
   - The gems are now installed on your machine. They are NOT installed globally unless you want to install the globally .
     * To do so, you must run gem install [gem-name] in the shell.
   - A Gemfile.lock will also be added to your project. This is used to keep track of the gems that you are using in your project.

 # Gemfile v.s. Gemfile.lock:
   - Gemfile is used to specify the gems that you want to use in your project.
   - The Gemfile.lock is used to specify the gems that you are actually using in your project and their dependencies.
   - This is important because if you are working on a team, you want to make sure that everyone is using the same version of the gems.
   - It will also make it easier to deploy your application to a server and keeps the environment clean. 

 # Nokogiri:
   - Nokogiri is a gem that allows you to parse HTML and XML docs.
   - We will create an index.html file inside our Nokogiri-example folder.

*//--------------------------------------Nokogiri Example--------------------------------------//*
<!DOCTYPE html>                                 |   require "nokogiri"
                                                |
<html lang="en">                                |   doc = Nokogiri::HTML(File.open("index.html"))
	<head>                                      |
		<meta charset="UTF-8" />                |   puts doc.css("h1").text
		<title>Nokogiri Example</title>         |
	</head>                                     |
	<body>                                      |
		<h1>Hello World</h1>                    |
	</body>                                     |
</html>                                         |
*//--------------------------------------------------------------------------------------------//*

   - require "nokogiri" = Requires the Nokogiri gem to use its provided objects.
   - Nogokiri::HTML = A module that is used to parse the HTML document.
   - doc = Nokogiri::HTML(File.open("index.html")) =
     * File.open method is used to open the index.html
     * As we pass in this file to the Nokoogiri::HTML module, it will parse the hTML document and store it in the doc variable.
     * Parsing it means that it will convert the HTML doc into a format that we can use.
   - puts doc.css("h1").text = We can now use the doc variable to get the data that we want.
   - We use the css method (a Nokogiri method) to select the h1 element.
   - We use the text method (a Nokogiri method) to get the text / content of the h1 element.
   - Upon executing ruby main.rb, it will print "Hello World" to the terminal

 # Web Scraping with Nokogiri and Httparty:
   -  We can use the Nokogiri gem and the Httparty gem to make HTTP requests and parse the HTML and XML docs.
   -  This is a form of web scraping.
   -  Web Scraping:     Extracting data from a website to be exported into a usable format in coding.
   -  Our example will be scraping the Wikipedia page fot he list of films from 2019.

*//--------------------------------------Web Scraping Example: Gemfile--------------------------------------//*
source "https://rubygems.org"

git_source(:github) {|repo_name| "https://github.com/#{repo_name}" }

ruby '3.1.2'
gem "nokogiri"
gem "httparty"
*//---------------------------------------------------------------------------------------------------------//*

*//--------------------------------------Web Scraping Example: main.rb--------------------------------------//*
require "nokogiri"
require "httparty"

class API
  def self.get_films_by_year(year)
    url = "https://en.wikipedia.org/wiki/#{year}_in_film"
    unparsed_page = HTTParty.get(url)
    parsed_page = Nokogiri::HTML(unparsed_page.body)

    # Extract the elements as nokogiri instances.
    films = parsed_page.css("table.wikitable.sortable tr td:nth-child(2) i a").map { |film| film.text.strip }
    end
  end
end
*//---------------------------------------------------------------------------------------------------------//*

   - get_films_by_year(year) method takes in a year as an argument to get a list of films from Wikipedia.
   - HTTParty.get method makes a GET request to the Wikipedia page for the year that we pass in as an argument.
   - Since we have the unparsed_page, we aren't able to make use of it until we parse it into a nokogiri object.
   - Targeting elements goes from left to right in the string as you go down the hierarchy. Parent element to child element.
   - The css method selects the "table.wikitable.sortable tr td:nth-child(2) i a" element
   - When web scraping, you need to inspect the webpage for the element that you want the information from.
     * This takes trial and error as some webpages can make it difficult to find the right element. 
   - Essentially, what is happening here is finding the parent element, targeting by its CSS class, then finding the child element and targeting it.
   - "table.wikitable.sortable tr td:nth-child(2) i a" represents the series of hierarchy levels used to get to the table and the elements.
     * You have a table element with classes of wikitable and sortable. This is used to specify the table that you want to select, since there are many tables on the page.
     * As you target the specific table, you then target the "tr" element since it will include all the rows of films. Technically, it will also include the header rows. So we have to specify that we want "td" for table data to remove the header rows.
     * Then you have the "nth-child(2)" element right after. This will only allow us to extract the second child element from every "td" which will include the title of the film that we want.
     * Then you have the "i" element and the "a" element.
     * This will return an array of nokogiri instances.
   - With these instances, we can iterate and strip the text from the elements. by adding ".map { |film| film.text.strip}"
   - Then, we use the "each_with_index" method to iterate over the films and print out the films to the terminal.  

*//--------------------------------------Web Scraping Example: main.rb--------------------------------------//*
  films.each_with_index do |film, index|
    puts "#{index + 1}. #{film}"
  end
*//---------------------------------------------------------------------------------------------------------//*

  - Nokogiri can be buggy / difficult to use as it is not always accurate. You may have to try different CSS selectors to get the data that you want.
  - All the code put together looks like this:

*//--------------------------------------Web Scraping Example: main.rb--------------------------------------//*
require "nokogiri"
require "httparty"

class API
  def self.get_films_by_year(year)
    url = "https://en.wikipedia.org/wiki/#{year}_in_film"
    unparsed_page = HTTParty.get(url)
    parsed_page = Nokogiri::HTML(unparsed_page.body)
    films = parsed_page.css("table.wikitable.sortable tr td:nth-child(2) i a").map { |film| film.text.strip }
    films.each_with_index do |film, index|
      puts "#{index + 1}. #{film}"
    end
  end
end

API.get_films_by_year(2019)
*//---------------------------------------------------------------------------------------------------------//*

  - Web scraping is a very powerful tool, but it  can be very slow and can be very difficult to maintain.
    * If the website changes, your code will break. 
    * If the website is down, your code will break. 
    * If the website is slow, your code will be slow.
    * If you are making a lot of requests, you can get banned from the website.
  - In the practical sense, you would not use web scraping to get data from a website unless for situations needed or special use cases.
  - More often, you will use an API.

 # Countries of the world CLI:
   - CLI (Command Line Interface)     A program that allows you to interact with your computer using the command line.
   - We will be creating our own CLI that will web scrape for a list of countries and their capitals, populations and area.
   - First, we will need to add a lib directory to house our files of code.

*//--------------------------------------Countries of the World CLI: lib/cli.rb--------------------------------------//*
class CLI
  def start
    puts "Welcome to the Countries of the World CLI!"
    puts "What is your name?"
    name = gets.strip
    puts "Hello #{name}!"
  end

  def get_input
    gets.strip
  end
end
*//------------------------------------------------------------------------------------------------------------------//*

  - We are using the CLI class to define a method called "start" that prints out a welcome message and asks the user for their name.
  - Then we use the gets global method to get the user's input. We then use the "strip" method to remove any whitespace from the user's input. Then we use the puts method to print out the user's name.
  - Next, we will move to the  main.rb and create a new CLI instance to call start.

*//--------------------------------------Countries of the World CLI: main.rb--------------------------------------//*
require_relative './lib/cli.rb

CLI.new.start
*//---------------------------------------------------------------------------------------------------------------//*

  - Now we need to create a test file for our CLI using rspec, meaning we need to first install rspec.
  - Run "bundle add rspec --init" to initialize rspec in the project folder. This will create a .rspec file and a spec directory with a spec_helper.rb file
    * Be sure to run the gem install rspec to use the rspec gem in the shell provided by commands like rpsec.

*//--------------------------------------Countries of the World CLI: spec/lib/cli_spec.rb--------------------------------------//*
require_relative "../../lib/cli.rb"

RSpec.describe CLI do
  describe "#start" do
    it "prints a welcome message and asks the user for their name" do
      cli = CLI.new

      # Stubbing the standard input to simulate user input
      allow(cli).to receive(:gets).and_return("John Doe\n")

      # Expecting specific output to standard output
      expect { cli.start }.to output(
        "Welcome to the Countries of the World CLI!\nWhat is your name?\nHello John Doe!\n"
      ).to_stdout
    end
  end
end
*//----------------------------------------------------------------------------------------------------------------------------//*

  - Above we are using "Rspec.describe" method to describe the "start" method of what we will be testing
  - Then we use the "it" method to describe what the "start" method does
  - The test demonstrates the creation of a new CLI object and the use of the "allow" method to allow the CLI object to receive the "get_input" method.
  - Then we use the "expect" method to expect the "cli.start" method to output the welcome message and ask the user for their name.
  - Run bundle exec rspec to run the test.
    * The difference between running "rspec" and "bundle exec rspec" is that "rspec" will use the globally installed version of rspec and "bundle exec rspec" will use the locally installed version of rspec
    * Typically, locally installed version of rspec is fine to avoid any issues with the version of rspec.
  - The website we will be scraping is a website that allows legal web scraping, it is called www.scrapethissite.com
    * This website allows scraping for educational purposes
    * Remember to be careful when scraping as it can get you banned from websites.
  - We will need to install the Nokogiri and HTTParty gems to our project.

*//--------------------------------------Countries of the World CLI: Gemfile--------------------------------------//*
source "https://rubygems.org"

git_source(:github) {|repo_name| "https://github.com/#{repo_name}" }

ruby '3.1.2'
gem "rspec"
gem "nokogiri"
gem "httparty"
*//---------------------------------------------------------------------------------------------------------------//*   

  - Run "bundle install" to install Nokogiri and HTTParty gems.
  - Now, let's create a new file called "scraper.rb" under lib, and add the following code:

*//--------------------------------------Countries of the World CLI: lib/scraper.rb--------------------------------------//* 
require "nokogiri"
require "httparty"

module Scraper
  INDEX_URL = 'https://www.scrapethissite.com/pages/simple/'
  def self.scrape_countries
    unparsed_page = HTTParty.get(INDEX.URL)
    parsed_page = Nokogiri::HTML(unparsed_page.body)
    puts parsed_page
  end
end
*//----------------------------------------------------------------------------------------------------------------------//* 

  - Above, we use the require methods to require the Nokogiri and HTTParty gems
  - The Scraper module is used  to define a method called "scrape_countries" that makes a GET request to the INDEX_URL and parses the HTML doc.
  - The INDEX_URL is a constant that is used to stare the URL that we want to scrape.
  - the HTTParty.get method is used to make a GET request to the INDEX_URL.
  - The puts method prints out the parsed HTML document to the terminal.
  - Call the scrape_countries method from the start method in the cli.rb file.

*//--------------------------------------Countries of the World CLI: lib/cli.rb--------------------------------------//*
require_relative "scraper.rb"

class CLI
  def start
    Scraper.scrape_countries
    puts "Welcome to the Countries of the World CLI!"
    puts "What is your name?"
    name = gets.strip
    puts "Hello #{name}!"
  end

  def get_input
    gets.strip
  end
end
*//------------------------------------------------------------------------------------------------------------------//*

  - Upon running this, you should see all the HTML printed out to the terminal.
  - This is where it gets tricky. If you navigate to the site and inspect the country elements, you will see that they are not in a table. They are in a div element. 
  - So we have to find a way to select the div element and then select the country elements.
  - Thankfully, they all have the same class called "country", so we can use that to select the country elements.

*//--------------------------------------Countries of the World CLI: lib/scraper.rb--------------------------------------//* 
require "nokogiri"
require "httparty"

module Scraper
  INDEX_URL = 'https://www.scrapethissite.com/pages/simple/'
  def self.scrape_countries
    unparsed_page = HTTParty.get(INDEX.URL)
    parsed_page = Nokogiri::HTML(unparsed_page.body)
    countries = parsed_page.css("div.country")
    puts countries
  end
end
*//----------------------------------------------------------------------------------------------------------------------//* 

  - Upon running this code, we notice how it only gives us divs with the class country.
  - div.country as an argument represents every div with the classname "country".
  - We want to select the country name, the capital, the population, and the area. We can do that by using the CSS method.

*//--------------------------------------Countries of the World CLI: lib/scraper.rb--------------------------------------//* 
require "nokogiri"
require "httparty"

module Scraper
  INDEX_URL = 'https://www.scrapethissite.com/pages/simple/'
  def self.scrape_countries
    unparsed_page = HTTParty.get(INDEX.URL)
    parsed_page = Nokogiri::HTML(unparsed_page.body)
    countries = parsed_page.css("div.country")

    countries.each do |country|
      name = country.css("country-name").text
      capital = country.css("country-capital").text
      population = country.css("country-population").text
      area = country.css("country-area").text

      puts "#{name} #{capital} #{population} #{area}"
    end
  end
end
*//----------------------------------------------------------------------------------------------------------------------//* 

  - Upon running the project, we see how we get all blanks. Something must have gone wrong, so to help debug this, we can use another Gem.

 # Byebug Gem
   - The Byebug gem is a gem that allows you to debug your code, similar to the debugger in JavaScript.
   - It allows you to parse your code and inspect it.
   - Install Byebug through your Gemfile.

*//--------------------------------------Countries of the World CLI: Gemfile--------------------------------------//*
source "https://rubygems.org"

git_source(:github) {|repo_name| "https://github.com/#{repo_name}" }

ruby '3.1.2'
gem "rspec"
gem "nokogiri"
gem "httparty"
gem "byebug
*//---------------------------------------------------------------------------------------------------------------//*   

  - Since we added another gem, we need to run "bundle install" to install the byebug gem.
  - Now we need to add byebug to our scraper.rb file.

*//--------------------------------------Countries of the World CLI: lib/scraper.rb--------------------------------------//* 
require "nokogiri"
require "httparty"
require "byebug"

module Scraper
  INDEX_URL = 'https://www.scrapethissite.com/pages/simple/'
  def self.scrape_countries
    unparsed_page = HTTParty.get(INDEX.URL)
    parsed_page = Nokogiri::HTML(unparsed_page.body)
    countries = parsed_page.css("div.country")

    countries.each do |country|
      name = country.css("country-name").text
      capital = country.css("country-capital").text
      population = country.css("country-population").text
      area = country.css("country-area").text
      debugger; #<-- This will pause the code
      puts "#{name} #{capital} #{population} #{area}"
    end
  end
end
*//----------------------------------------------------------------------------------------------------------------------//* 

  - Now run the project and add the debugger method to the scraper.rb file. This will pause our code at that spot to inspect it.
  - Running the project now will cause the following to appear in our console:

[12, 21] in /home/runner/countriesoftheworldcli/lib/scraper.rb
   12:     countries.each do |country|
   13:       name = country.css("country-name").text
   14:       capital = country.css("country-capital").text
   15:       population = country.css("country-population").text
   16:       area = country.css("country-area").text
   17:       debugger;
=> 18:       puts "#{name} #{capital} #{population} #{area}"
   19:     end
   20:   end
   21: end
(byebug)

   - The pause in the code gives us access to the variables in our code. We can enter in name and it will print out the name of the country.
   - But upon doing so, we get an empty string, so we need to play around with the CSS selector to target the data we want.
   - Unfortunately, there isn't a straight forward process since it takes time to debug and figure out what is going on.
   - We need to further inspec the elements to really see what is happening.
   - When inspecting the country class element on the webpage, we notice that it includes an h3 and a div with the country info.
   - This means that the country represents both those elements as well, so we need to select the h3 element and the div element separately.
   - Let's try and enter a country name while still in the debugger. You will get this:

#<Nokogiri::XML::Element:0x99c name="div" attributes=[#<Nokogiri::XML::Attr:0x67c name="class" value="col-md-4 country">] children=[#<Nokogiri::XML::Text:0x690 "\n  
<!-- (there's more but it goes on forever) -->

   - We see that we got a nokogiri instance
   - We can call nokogiri methods on it such as "css" and "text" to further get the values we want.
   - Try entering in country.css("h3")
   - This will return the country name, but in a weird format:

"\n                            \n                            Andorra\n                        "

   - It is not perfect, but it's a start. We can use the strip method to remove all the whitespace: country.css("h3").text.strip
   - Now we get "Andorra"
   - Now we can exit the debugger by entering "exit" into the terminal.
   - We need to change scraper.rb file to add th period in each css selector.

*//--------------------------------------Countries of the World CLI: lib/scraper.rb--------------------------------------//* 
require "nokogiri"
require "httparty"
require "byebug"

module Scraper
  INDEX_URL = 'https://www.scrapethissite.com/pages/simple/'
  def self.scrape_countries
    unparsed_page = HTTParty.get(INDEX_URL)
    parsed_page = Nokogiri::HTML(unparsed_page.body)
    countries = parsed_page.css("div.country")
    
    countries.each do |country|
      name = country.css(".country-name").text.strip
      capital = country.css(".country-capital").text.strip
      population = country.css(".country-population").text.strip
      area = country.css(".country-area").text.strip
      puts "#{name} #{capital} #{population} #{area}"
    end
  end
end
*//----------------------------------------------------------------------------------------------------------------------//* 

   - Now that the bug is fixed, we can create a country class to store the data.
   - Create a file called country.rb under lib.

*//--------------------------------------Countries of the World CLI: lib/country.rb--------------------------------------//*
class Country
  attr_accessor :name, :capital, :population, :area

  @@all = []

  def initialize(name, capital, population, area)
    @name = name
    @capital = capital
    @population = population
    @area = area
    @@all << self
  end

  def self.all
    @@all
  end
end
*//-----------------------------------------------------------------------------------------------------------------------//*

   - Above, the attr_accessor method creates getters and setters for the name, capital, population and area.
   - The @@all class variable is used to store all the instances of the Country class
   - The Initialize method is used to initialize a new country object with name, capital, population and area.
   - We like to store the data in objects because it makes it easier to work with.
     * We can create new country object and store data in it. 
     * Then we can use the country object to get the data we want.
   - Now we need to update the scraper.rb file to create a new country object and store data in it.

*//--------------------------------------Countries of the World CLI: lib/scraper.rb--------------------------------------//* 
require "nokogiri"
require "httparty"
require "byebug"
require_relative "./country.rb"

module Scraper
  INDEX_URL = 'https://www.scrapethissite.com/pages/simple/'
  def self.scrape_countries
    unparsed_page = HTTParty.get(INDEX_URL)
    parsed_page = Nokogiri::HTML(unparsed_page.body)
    countries = parsed_page.css("div.country")
    
    countries.each do |country|
      name = country.css(".country-name").text.strip
      capital = country.css(".country-capital").text.strip
      population = country.css(".country-population").text.strip
      area = country.css(".country-area").text.strip
      Country.new(name, capital, population, area)
    end
  end
end
*//----------------------------------------------------------------------------------------------------------------------//* 

   - Now we can add a search functionality and display our data to the user.

*//--------------------------------------Countries of the World CLI: lib/cli.rb--------------------------------------//*
require_relative "scraper.rb"

class CLI
  def start
    Scraper.scrape_countries
    puts "Welcome to the Countries of the World CLI!"
    puts "What is your name?"
    name = gets.strip
    puts "Hello #{name}!"
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
end
*//------------------------------------------------------------------------------------------------------------------//*

   - Now we have a functional CLI that allows the user to get information about a country.
   - However, we can only get information about one country.
   - We can further improve this, but for now this will do.

 # Technical Documentation:
   - Technical Documentation is used to help create a better experience for the developer.
   - Documentation in the context of software development is a written text / illustration that accompanies computer software or is embedded in the source code.
   - The purpose of the documentation is to explain how software operates or how to use it.
   - It may even mean different things to people in different roles.
   - Technical documentation is useful because:
     * It helps developers understand the codebase
     * It Helps developers understand the architecture of the codebase.
   - When it comes to documentation, there are two types:
     * Internal:  This is written for the developer. It is not meant for the end user. It is meant for the developer to understand the codebase and architecture of the code.
     * External:  This is documentation that is written for the end user. It is meant for user  to understand how to use the software.
   - For our CLI, let's write an internal doc.
   - In the read.me file, write out the following:
     * Title
     * Description
     * Installation
     * Gems
       + All gems used in the project
   - This details what the CLI is and how to install it.
   - It also lists the gems that we are using and the license that we are using
   - This is useful for any developer who wants to use our CLI       