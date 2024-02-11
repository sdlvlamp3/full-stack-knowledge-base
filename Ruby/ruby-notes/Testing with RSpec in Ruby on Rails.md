*//------------------------------------------------------------RSPEC IN RUBY ON RAILS------------------------------------------------------------//* 
 
 # Test Driven Development (TDD):
   - Test Driven Development is a testing paradigm that involves writing tests before writing code.
   - The process is as follows:
     1. Write a test.
     2. Run the test and watch it fail.
     3. Write the code to make the test pass.
     4. Refactor your code.

 # Types of Testing:
   - There are many types of testing.
   - The following are the most common forms of testing:
     * Unit Testing:            Testing individual units of code
     * Integration Testing:     Testing how different units of code work together.
     * Functional Testing:      Testing the functionality of your application
     * Acceptance Testing:      Testing the acceptance criteria of your application.
     * Regressing Testing:      Testing to ensure that new code does not break existing code.
     * Performance Testing:     Testing the performance of your application.
     * Security Testing:        Testing the security of your application.

 # Testing in Ruby on Rails:
   - Ruby on Rails by default ships with a testing framework called Minitest.
   - Minitest is a very simple testing framework that is easy to use, but it is not as powerful as other frameworks like RSpec.
   - In order to add the RSpec-rails gem, run the following command in ubuntu:
     * rails new [name] -T --api
   - This will generate a new Rails application without the default testing framework.
   - Without adding -T, Rails will automatically add Minitest.
   - If you want to remove preexisting test files run the following command:
     * fm -rf test/
   - Add the following gems to your gemfile:

*//----------gemfile----------//*         
 group :development, :test do
  gem 'rspec-rails'
  gem 'factory_bot_rails'
end
*//---------------------------//*

   - Notice that we are adding the gems tto the development and test groups. 
     * This is because we only want to use these gems in development and test environments, not in production.
     * The reason for this is that these gems are not needed in production and can slow down your application. 
   - gem 'rspec-rails': RSpec testing framework for Ruby on Rails
   - gem 'factory_bot_rails': Gem that allows you to create factories for your tests. Factories are a way to create test data.
   - Next, run the following command to generate RSpec configuration files:
     * rails generate rspec:install
   - This will create the following files:
     * create .rspec
     * create spec   
     * create spec/spec_helper.rb  
     * create spec/rails_helper.rb
   - To use factory-bot, we need to add the following tour rails_helper.rb file:

*//----------rails_helper.rb----------//*         
.
.
.
RSpec.configure do |config|
  config.include FactoryBot::Syntax::Methods
  .
  .
  .
end
*//-----------------------------------//*

   - This will allow us to use factory-bot methods in our tests.
   - Using a testing framework can be intimidating, but it becomes easier the more you do it.

 # Unit Testing in Ruby on Rails:
   - We will be using TDD approach to build a simple blog application.
   - In ruby on rails, we can unit test our models.
   - Create a new folder under spec called models, and create a file under models called post_spec.rb
   - Add the following to spec/models/post_spec.rb

*//----------spec/models/post_spec.rb----------//*
require 'rails_helper'

RSpec.describe Post, type: :model do
  context 'with valid attributes' do
    it 'is valid' do
      post = Post.new(title: 'My First Post', content: 'Hello, world!')
      expect(post).to be_valid
    end
  end
end
*//--------------------------------------------//*

   - Run bundle exec rspec spec/models/post_spec.rb in your terminal to run the test, or bundle exec rspec to run all tests.
   - You should see the following output:

germancruz@codecoachthree testing-example % bundle exec rspec spec/models/post_spec.rb


An error occurred while loading ./spec/models/post_spec.rb.
Failure/Error:
  RSpec.describe Post, type: :model do
    context 'with valid attributes' do
      it 'is valid' do
        post = Post.new(title: 'My First Post', content: 'Hello, world!')
        expect(post).to be_valid
      end
    end
  end

NameError:
  uninitialized constant Post

  RSpec.describe Post, type: :model do
                 ^^^^
# ./spec/models/post_spec.rb:5:in `<top (required)>'
No examples found.


Finished in 0.00006 seconds (files took 1.51 seconds to load)
0 examples, 0 failures, 1 error occurred outside of examples

   - What is happening in the above output?
     1. We are requiring the rails_helper file. 
        * This file contains the configuration for RSpec for Rails. It also includes the spec_helper file.
     2. Include the RSpec.describe method. 
        * This method takes two arguments: the name of the class you are testing and the type of test you are running. 
        * In our case, we are testing the Post model and we are running a model test. 
     3. Define a context.
        * A context is a way to group tests together.
        * In our case, we are grouping tests that have valid attributes.
     4. Define a test.
        * A test is defined using the "it" method.
        * In our case, we are testing that a post is valid.
        * We are creating a new post with a title and content and we are expecting it to be valid.
     5. Create the correct expectation.
        * In our case, we are expecting the post to be valid using "be_valid" matcher
     6. Run rspec in the terminal to run the test. 
        * Remember we are using a TDD approach so we expect the test to fail.
   - Now we are going to write the code to make the test pass.
   - Run the following command:
     * bundle exec rails generate model Post title:string content:text
   - You may get a prompt when generating this model:

germancruz@codecoachthree testing-example % bundle exec rails generate model Post title:string content:text
      invoke  active_record
      create    db/migrate/20240115184645_create_posts.rb
      create    app/models/post.rb
      invoke    rspec
    conflict      spec/models/post_spec.rb

   - This is because we are trying to generate a test for us. We already have a test so we can skype this by entering "n"  
   - Don't forget, when we generate a model, we also generate a migration. So you need to run the following:
     * bundle exec rails db:migrate
   - You should see the following output:

germancruz@codecoachthree testing-example % bundle exec rspec spec/models/post_spec.rb

.

Finished in 0.06584 seconds (files took 3.53 seconds to load)
1 example, 0 failures

   - Why is our test passing now?
     * We are creating a post with the title and content. 
     * We are expecting it to be valid.
     * Since we have the "title" and "content" attributes in our Post model, the test passes.
   - Let's add another test to our post_spec.rb file:

*//----------spec/models/post_spec.rb----------//*
require 'rails_helper'

RSpec.describe Post, type: :model do
  context 'with valid attributes' do
    it 'is valid' do
      post = Post.new(title: 'My First Post', content: 'Hello, world!')
      expect(post).to be_valid
    end
  end

  context 'with invalid attributes' do
    it 'is invalid without a title' do
      post = Post.new(content: 'Hello, world!')
      expect(post).to be_invalid
    end
  end
end
*//--------------------------------------------//*

   - context 'with invalid attributes' do :
     * A context is a way to group tests together.
     * In this case, we are grouping tests that have invalid attributes.
   - it 'is invalid without a title' do
     post = Post.new(content: 'Hello, world')
     expect(post).to be_invalid : 
     * We are creating a post without a title.
     * We are expecting it to be invalid.
     * This is useful because we want to ensure that our validations are working as well.
   - To pass this test, we need to a dd a validation to our Post model.
   - Let's add a validation for the title attribute:

*//----------app/models/post.rb----------//*
class Post < ApplicationRecord
  validates :title, presence: true
end
*//--------------------------------------//*

 # Unit Testing Controllers:
   - Unit testing controllers is a little more complicated than unit testing models.
   - Let's create a test for PostsController
   - Create a new folder under spec called "requests", and create a file under "requests" called "posts_spec.rb"
   - Include the following:

*//----------spec/controllers/posts_spec.rb----------//*
require 'rails_helper'

RSpec.describe 'Posts API', type: :request do
  describe 'POST /posts' do
    let(:valid_attributes) { { title: 'My first post', content: 'Content of the post' } }

    context 'when the request is valid' do
      it 'creates a new post' do
        expect {
          post '/posts', params: { post: valid_attributes }
        }.to change(Post, :count).by(1)

        expect(response).to have_http_status(201)
        expect(json['title']).to eq('My first post')
        expect(json['content']).to eq('Content of the post')
      end
    end

  end

  def json
    JSON.parse(response.body)
  end
end
*//--------------------------------------------------//*

   - require 'rails_helper'
     * We are requiring the rails_helper file.
     * This file contains the configuration posts for RSpec and Rails. It also includes the spec_helper file.
   - RSpec.describe 'Posts API', type: :request do
     * Here we are using RSpec.describe method to describe our Post controller.
     * We are also specifying that this is a request test.
   - describe 'POST /posts' do
     * The describe methods takes a block in which we can define our tests.
     * In our case we are defining a test for the POST /posts endpoint.
   - let(:valid_attributes) { { title: 'My first post', content: 'Content of the post' } }     
     * Here, we use "let" to define a variable called "valid_attributes"
     * This is a hash with the title and content attributes.
     * It looks odd but this is how we define variables in RSpec.
   - context 'when the request is valid' do
     * Context is a way to group tests together.
     * In our case, we are grouping tests that have valid attributes.
     * We didn't have to do this, but it's good practice to group related tests together.
   - it 'creates a new post' do
     * The "it" method defines a test in which includes an argument that describes what the test does.
     * In our case, we are testing that a new post is created.
   - expect { post '/posts', params: { post: valid_attributes }.to change(Post, :count).by(1) }   
     * Let's break down each method call:
       + expect
         - What we expect to happen.
         - In our case, we expect a new post to be created.
       + {post '/posts', params: { post: valid_attributes } } 
         - The code that we expect to run.
         - In our case, we are making a POST request to the /posts endpoint with the valid_attributes hash.
       + to
         - The matcher.
         - In this case, we are expecting the code to change the Post count by 1.
   - In RSpec you can chain methods together. In our case, we are chaining the "expect" method wih the "to" method.    
   - expect(response).to have_http_status(201)
     * We are expecting to have a 201 status (the status code for a successful POST request)
   - expect(json['title']).to eq('My first post')
     expect(json['content']).to eq('Content of the post')        
     * Here we are expecting the response to have a title and content that matches the valid_attributes hash.
   - def json
       JSON.parse(response.body)
     end
     * This is a helper method that parses the response body into JSON.
   - Now that we have our test, let's run it and we expect it to fail:
     * bundle exec rspec spec/requests/posts_spec.rb
   - Let's go ahead and pass this test.
     * rails g controller Posts
       + This will generate a controller. We don't need to generate a model because we already have one.
       + It my prompt you to overwrite the "posts_controller.rb" file. Enter "n" to skip this since we already have a spec file for this.
   - Add the following to our PostsController:

*//----------app/controllers/posts_controller.rb----------//*
class PostsController < ApplicationController
  def create
    post = Post.new(post_params)
    if post.save
      render json: post, status: :created
    else
      render json: post.errors, status: :unprocessable_entity
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :content)
  end
end
*//-------------------------------------------------------//*

*//----------config/routes.rb----------//*
Rails.application.routes.draw do
  resources :posts # will generate all routes for posts including POST /posts with action create
end
*//------------------------------------//*

   - Let's run the test again:
     * bundle exec rspec spec/requests/posts_spec.rb
   - The test should pass.
   - Let's refactor this test into multiple tests:

*//----------spec/controllers/posts_spec.rb----------//*
require 'rails_helper'

  RSpec.describe 'Posts API', type: :request do
    describe 'POST /posts' do
      let(:valid_attributes) { { title: 'My first post', content: 'Content of the post' } }

    context 'when the request is valid' do
      before { post '/posts', params: { post: valid_attributes } }

      it 'creates a new post' do
        expect {
          post '/posts', params: { post: valid_attributes }
        }.to change(Post, :count).by(1)
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end

      it 'returns the created post' do
        expect(json['title']).to eq('My first post')
        expect(json['content']).to eq('Content of the post')
      end

      it 'saves the post with the correct attributes' do
        post = Post.last
        expect(post.title).to eq('My first post')
        expect(post.content).to eq('Content of the post')
      end
    end
  end

  def json
    JSON.parse(response.body)
  end
end
*//----------------------------------------------------//*  

   - Here, we are separating our tests into multiple tests. 
   - This is good practice because it makes our tests more readable and easier to debug.
   - Notice we used the "before" method.
     * This method runs the code before each test.
     * In this case, we are making a POST request to the /posts endpoint with the "valid_attributes" hash.
   - Next, we will create a test for teh GET /posts endpoint:

*//----------spec/controllers/posts_spec.rb----------//*
require 'rails_helper'

  RSpec.describe 'Posts API', type: :request do
    describe 'POST /posts' do
      let(:valid_attributes) { { title: 'My first post', content: 'Content of the post' } }

    context 'when the request is valid' do
      before { post '/posts', params: { post: valid_attributes } }

      it 'creates a new post' do
        expect {
          post '/posts', params: { post: valid_attributes }
        }.to change(Post, :count).by(1)
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end

      it 'returns the created post' do
        expect(json['title']).to eq('My first post')
        expect(json['content']).to eq('Content of the post')
      end

      it 'saves the post with the correct attributes' do
        post = Post.last
        expect(post.title).to eq('My first post')
        expect(post.content).to eq('Content of the post')
      end
    end
  end

  describe 'GET /posts' do
    let!(:posts) { create_list(:post, 10) } # creating 10 posts using Factory Bot

    before { get '/posts' }

    it 'returns posts' do
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns posts with the correct structure' do
      # Assuming each post has 'title' and 'content'
      json.each do |post|
        expect(post).to include('title', 'content')
      end
    end
  end

  def json
    JSON.parse(response.body)
  end
end
*//----------------------------------------------------//*  

   - describe 'GET /posts' do
     * Here we created a new describe block for the GET /posts endpoint
   - let!(:posts) { create_list(:post, 10) }
     * Here we are using the "let!" method to create 10 posts using factory-bot.
   - create_list
     * A factory-bot method that creates a list of objects.
     * In our case, a list of 10 posts.
   - If we navigate to spec/factories/posts.rb, we can see the factory for our posts:

*//-----------------spec/factories/posts.rb----------------//*  
FactoryBot.define do
  factory :post do
    title { "MyString" }
    content { "MyText" }
  end
end     
*//-------------------------------------------------------//*  

   - This is a factory for our posts.
   - Factories and RSpec are different and aren't dependent upon each other but they go well with each other.
   - Now we can create posts without factories within the test cases themselves, but there are benefits to using factory-bot:
     * Factories allow you to define a common setup for creating objects.
     * You can define this setup once in a factory and then reuse it across multiple tests, reducing repetition.
     * There may be times you have to add or remove attributes from these objects.
     * Factories abstract away the complexities of object creation.
     * Tests become cleaner and more focused on the behavior of being tested rather than the setup.
   - (back in the test file) before { get '/posts' }
     * We are making a GET request to the /posts endpoint.
   - it 'returns posts' do
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
     end
     * We are expecting the response to have a status of 200
     * We are also expecting the response to not be empty and to ah ve a size of 10.
   - In our other test, we are expecting the response to have a title and content.
   - The final result should look like the following:

*//----------spec/controllers/posts_spec.rb----------//*
require 'rails_helper'

  RSpec.describe 'Posts API', type: :request do
    describe 'POST /posts' do
      let(:valid_attributes) { { title: 'My first post', content: 'Content of the post' } }

    context 'when the request is valid' do
      before { post '/posts', params: { post: valid_attributes } }

      it 'creates a new post' do
        expect {
          post '/posts', params: { post: valid_attributes }
        }.to change(Post, :count).by(1)
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end

      it 'returns the created post' do
        expect(json['title']).to eq('My first post')
        expect(json['content']).to eq('Content of the post')
      end

      it 'saves the post with the correct attributes' do
        post = Post.last
        expect(post.title).to eq('My first post')
        expect(post.content).to eq('Content of the post')
      end
    end
  end

  describe 'GET /posts' do
    let!(:posts) { create_list(:post, 10) } # creating 10 posts using Factory Bot

    before { get '/posts' }

    it 'returns posts' do
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns posts with the correct structure' do
      # Assuming each post has 'title' and 'content'
      json.each do |post|
        expect(post).to include('title', 'content')
      end
    end
  end

  def json
    JSON.parse(response.body)
  end
end
*//----------------------------------------------------//*  

   - Now we will create a test for the PUT /posts/:id endpoint:

*//----------spec/controllers/posts_spec.rb----------//*
.
.
.

describe 'PUT /posts/:id' do
    let!(:post) { create(:post)} 
    
    context 'when the request is valid' do 
      before { put "/posts/#{post.id}", params: { post: { title: 'My updated post', content: 'Updated content' } } }

      it 'updates the post' do 
        expect(response).to have_http_status(200)
        expect(json['title']).to eq('My updated post')
        expect(json['content']).to eq('Updated content')
      end
    end

    context 'when the request is invalid' do 
      before { put "/posts/#{post.id}", params: { post: { title: '', content: '' } } }

      it 'returns status code 422' do 
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do 
        expect(json['title']).to include("can't be blank")
        expect(json['content']).to include("can't be blank")
      end
    end
  end

  def json
    JSON.parse(response.body)
  end
end
*//----------------------------------------------------//* 

   - describe 'PUT /posts/:id' do
     * We are creating a new describe block for the PUT /posts/:id endpoint
   - let!(:post) { create(:post) }
     * We are declaring a variable called post and we are creating a new post using factory-bot's method, "create".
     * The argument in create represents the factory name or class name which exist in the spec/factories/posts.rb file.
   - context 'when the request is valid' do 
      before { put "/posts/#{post.id}", params: { post: { title: 'My updated post', content: 'Updated content' } } }

      it 'updates the post' do 
        expect(response).to have_http_status(200)
        expect(json['title']).to eq('My updated post')
        expect(json['content']).to eq('Updated content')
      end
    end   
     * We are making a PUT request to the /posts/:id endpoint with the post hash.
     * We are expecting the response to have a status of 200.
     * We are expecting the response to have a title and content that matches the post hash.
   - context 'when the request is invalid' do 
      before { put "/posts/#{post.id}", params: { post: { title: '', content: '' } } }

      it 'returns status code 422' do 
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do 
        expect(json['title']).to include("can't be blank")
        expect(json['content']).to include("can't be blank")
      end
    end
     * We are making a PUT request to the /posts/:id endpoint with an empty post hash.
     * We are expecting the response to have a status of 422.
     * We are expecting the response to have a title and content that includes a validation error message.

*//----------config/routes.rb----------//*
Rails.application.routes.draw do
  resources :posts
end
*//------------------------------------//*

   - As a reminder, this will include the route PUT /posts/:id in which will update a post.
   - The following is a table of the HTTP methods and their corresponding controller actions when we use resources :posts

| HTTP Method | Controller Action | |       Route       |
| ----------- | ----------------- | | ------------------|
| GET         | index             | | GET /posts        |
| GET         | show              | | GET /posts/:id    |
| POST        | create            | | POST /posts       |
| PUT         | update            | | PUT /posts/:id    |
| DELETE      | destroy           | | DELETE /posts/:id |

*//----------app/controllers/posts_controller.rb----------//*
class PostsController < ApplicationController
  def create
    post = Post.new(post_params)
    if post.save
      render json: post, status: :created
    else
      render json: post.errors, status: :unprocessable_entity
    end
  end

  def index 
    render json: Post.all
  end

  def show 
    post = Post.find(params[:id])

    if post 
      render json: post, status: :ok 
    else 
      render json: {message: 'not found'}, status: :not_found
    end
  end

  def update 
    post = Post.find(params[:id])

    if post.update(post_params)
      render json: post, status: :ok 
    else 
      render json: post.errors, status: :unprocessable_entity
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :content)
  end
end
*//-------------------------------------------------------//*

   - Next, we will add a test for the DELETE /posts/:id endpoint.

*//----------spec/controllers/posts_spec.rb----------//*
.
.
.

  describe 'DELETE /posts/:id' do
    let!(:post) { create(:post) }

    before { delete "/posts/#{post.id}" }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end

  def json
    JSON.parse(response.body)
  end
end
*//--------------------------------------------------//* 

   - Remember to include the route DELETE /posts/:id in the routes.rb

*//----------app/controllers/posts_controller.rb----------//*
class PostsController < ApplicationController
  def create
    post = Post.new(post_params)
    if post.save
      render json: post, status: :created
    else
      render json: post.errors, status: :unprocessable_entity
    end
  end

  def index 
    render json: Post.all
  end

  def show 
    post = Post.find(params[:id])

    if post 
      render json: post, status: :ok 
    else 
      render json: {message: 'not found'}, status: :not_found
    end
  end

  def update 
    post = Post.find(params[:id])

    if post.update(post_params)
      render json: post, status: :ok 
    else 
      render json: post.errors, status: :unprocessable_entity
    end
  end

  def destroy
    post = Post.find(params[:id])

    if post.destroy
      # return a response with only headers and no body
      head :no_content
    else 
      render json: post.errors, status: :unprocessable_entity
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :content)
  end
end
*//------------------------------------------------------//*

 # Faker:
   - You'll notice that we are using "MyString" and "MyText" as the title and content in our post factory.
   - We can include data that is much more useful by using the Faker gem.
   - Install the faker gem by adding the following code to our gemfile:

*//----------gemfile----------//*         
group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
  gem 'rspec-rails'
  gem 'factory_bot_rails'
  gem 'faker'
end
*//---------------------------//*

   - Also include the following in your rails_helper file:

*//----------rails_helper.rb----------//*         
require 'spec_helper'
require 'faker'
.
.
.
*//-----------------------------------//*

   - Run bundle install in the terminal.
   - The faker gem allows us to generate fake data based off of different categories.
   - The faker gem is useful for mocking realistic data for testing purposes:
     * robust
     * realism
     * cover a wide range of scenarios
   - Let's update our post factory to use the faker gem:

*//-----------------spec/factories/posts.rb----------------//*  
FactoryBot.define do
  factory :post do
    title { Faker::Lorem.sentence }
    content { Faker::Lorem.paragraph }
  end
end   
*//-------------------------------------------------------//*  

 # Refactoring with Confidence:
   - Now that we have our tests, we can refactor our code.
   - Let's refactor our PostsController to use the "before_action" method

*//----------app/controllers/posts_controller.rb----------//*
class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]

  def create
    post = Post.new(post_params)
    if post.save
      render json: post, status: :created
    else
      render json: post.errors, status: :unprocessable_entity
    end
  end

  def index 
    render json: Post.all
  end

  def show 
    render json: @post, status: :ok 
  end

  def update 
    if @post.update(post_params)
      render json: @post, status: :ok 
    else 
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if @post.destroy
      # return a response with only headers and no body
      head :no_content
    else 
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :content)
  end

  def set_post
    @post = Post.find(params[:id])
  end
end
*//------------------------------------------------------//*
